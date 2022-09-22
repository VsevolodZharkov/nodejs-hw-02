const express = require("express");
const Joi = require("joi");
const router = express.Router();

const { RequestError } = require('../../helpers')

const {
	getAll, 
	getContactById, 
	removeContact, 
	addContact, 
	updateContact,
		}  = require('../../models/contacts')

const addSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	phone: Joi.string().required(),
})

router.get("/", async (req, res, next) => {
	try {
		const result = await getAll();
		res.json(result);
	} catch(error) {
		next(error)
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await getContactById(id);
		if(!result) {
			throw RequestError(404);
		}
		res.json(result);
	} catch(error) {
		next(error)
	}
});

router.post("/", async (req, res, next) => {
 try {
	const {error} = addSchema.validate(req.body);
		if(error) {
			throw RequestError(400, error.message);
		}
		const result = await addContact(req.body);
		res.status(201).json(result);
		res.json(result);
	} catch(error) {
		next(error)
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const {error} = addSchema.validate(req.body);
		if(error) {
			throw RequestError(400, error.message);
		}
		const { id } = req.params;
		const result = await updateContact(id, req.body);
		if(!result) {
			throw RequestError(404);
		}
		res.json(result);
	 } catch(error) {
		 next(error)
	 }
 });

router.delete("/:id", async (req, res, next) => {
  try {
		const { id } = req.params;
		const result = await removeContact(id);
		if(!result) {
			throw RequestError(404);
		}
		res.json({
			message: "Book deleted"
		});
	 } catch(error) {
		 next(error)
	 }
});

module.exports = router;
