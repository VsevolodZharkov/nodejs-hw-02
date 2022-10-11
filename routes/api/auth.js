//  npm i bcryptjs
// npm i jsonwebtoken
// не забыть скопировать .env
const express = require("express");

const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate } = require("../../middleware");
const { schema } = require("../../models/user")

const router = express.Router();

//  signup
router.post("/signup",validateBody(schema.registerSchema), ctrlWrapper(ctrl.registed));

//  signip
router.post("/login",validateBody(schema.loginSchema), ctrlWrapper(ctrl.login));

// logout
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

// curent
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

module.exports = router;