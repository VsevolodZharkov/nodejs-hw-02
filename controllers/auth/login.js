const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const {User} = require("../../models/user");
const { RequestError } = require("../../helpers");

const {SECRET_KEY} = process.env;

const login = async(req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({email});
	if (!user) {
		throw RequestError(401, "Email or password is wrong");
	}
	const passwordComp = await bcrypt.compare(password, user.password);
 	if( !passwordComp ) {
		throw RequestError(401, "Email or password is wrong");
 	}

	const payload = {
		id: user.id,
	}
	const token = jwt.sign(payload, SECRET_KEY, {expiresIN: "1h"});
	res.status(200).json({
		token: token,
  	user: {
    	email: user.email,
    	subscription: user.subscription,
 	 	}
	})
}

module.exports = login;