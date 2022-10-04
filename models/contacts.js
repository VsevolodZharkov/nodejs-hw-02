const { Schema, model } = require("mongoose");
const handleSaveError = require("../middlewares/handelSaveError")
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
const Contact = model("contacts", contactSchema);

module.exports = Contact;