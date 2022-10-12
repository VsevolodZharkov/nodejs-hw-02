const {RequestError} = require("../helpers")
const {User} = require("../models/user")
const {SECRET_KEY} = process.env;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
      next(RequestError(401, "Not authorized"));
    }

    try {
      jwt.verify(token, SECRET_KEY);
      const { id } = jwt.decode(token);
      const user = await User.findById(id);

      if (!user) {
        next(RequestError(401, "Not authorized"));
      }
      req.user = user;

      next();
    } catch (error) {
      next(RequestError(401, "Not authorized"));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;