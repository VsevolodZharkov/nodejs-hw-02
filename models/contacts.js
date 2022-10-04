const { Schema, model } = require("mongoose");

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

const handleSaveError = (error, _, next) => {

	next()
};

contactSchema.post("save", handleSaveError);
const Contact = model("contacts", contactSchema);

module.exports = Contact;