
const express = require("express");

const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate, upload } = require("../../middleware");
const { schemas } = require("../../models/user");

const router = express.Router();

//  signup
router.post("/signup", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.registed));

//  signip
router.post("/login",validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

// logout
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

// curent
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrentUser));

router.patch("/avatars", authenticate, upload.single("avatar") ,  ctrlWrapper(ctrl.updateAvatar))

module.exports = router;