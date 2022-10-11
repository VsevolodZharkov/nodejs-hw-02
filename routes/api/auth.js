//  npm i bcryptjs
// npm i jsonwebtoken
// не забыть скопировать .env
const express = require("express");

const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middleware");
const { schema } = require("../../models/user")

const router = express.Router();

//  signup
router.post("/users/signup",validateBody(schema.registerSchema), ctrlWrapper(ctrl.registed));

//  signip
router.post("/users/login",validateBody(schema.loginSchema), ctrlWrapper(ctrl.login));

module.exports = router;