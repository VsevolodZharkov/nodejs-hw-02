const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleSaveError = require("../middleware");

const contactSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Set name for contact'],
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
	favorite: {
		type: Boolean,
		default: false,
	},
});

contactSchema.post("save", handleSaveError);

const addSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	phone: Joi.string().required(),
	favorite: Joi.Boolean(),
})

const updateFavoriteSchema = Joi.object({
	favorite: Joi.Boolean().required(),
})

const schema = {
	addSchema,
	updateFavoriteSchema,
}

const Contact = model("contact", contactSchema);

module.exports = {
	Contact,
	schema
};