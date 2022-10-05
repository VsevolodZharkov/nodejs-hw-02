const express = require("express");
const ctrl = require("../../controllers/contacts");

const {ctrlWrapper} = require("../../helpers");

const {validateBody} = require("../../middleware");
const {schemas} = require("../../models/contact");

const router = express.Router();
router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addCont));

router.put("/:id", validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact));

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

router.patch("/:id/favorite", validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

module.exports = router;
