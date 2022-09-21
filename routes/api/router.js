const express = require("express");

const router = express.Router();

const {
	getAll, 
	// getContactById, 
	// removeContact, 
	// addContact, 
	// updateContact,
		}  = require('../../models/contacts')

router.get("/", async (req, res) => {
	try {
		const result = await getAll();
		res.json(result);
	} catch(error) {
		res.status(500).json({
			message: "Server Error!"
		})
	}
});

// router.get("/:contactId", async (req, res, next) => {
// 	try {
// 		const { id } = req.params;
// 		const result = await contacts.getContactById(id);
// 		res.json(result);
// 	} catch(error) {
// 		res.status(500).json({
// 			message: "Server Error2!"
// 		})
// 	}
// });

// router.post("/", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// router.delete("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// router.put("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

module.exports = router;
