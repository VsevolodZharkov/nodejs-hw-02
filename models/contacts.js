const { Schema, model } = require("mongoose");
const handleSaveError = require("../midlewares");
const Joi = require("joi");
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

const schema = {
	addSchema,
}

const Contact = model("contacts", contactSchema);

module.exports = {
	Contact,
	schema
};