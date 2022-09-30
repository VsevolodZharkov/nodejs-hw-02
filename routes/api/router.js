// Xk-%y@26MgrMYEe

const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts")
const { ctrlWrapper } = require("../../helpers")
router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post("/", ctrlWrapper(ctrl.addCont));

router.put("/:id", ctrlWrapper(ctrl.updateContact));

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

module.exports = router;
