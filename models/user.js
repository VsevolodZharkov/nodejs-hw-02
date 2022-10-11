const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { string } = require("joi");

const isConflict = ({name, code}) => (name === "MangoServerError" && code === 11000);

const handleSaveError = (error, _, next) => {
	error.status = isConflict(error) ? 409 : 400;
	next();
};

const userSchema = new Schema ({
	password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'user',
		require: true,
	},
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleSaveError);

const registerSchema = Joi.object({
	subscription: string(),
	email: string().required(),
	password: string().min(6).required(),
	token: string(),
	owner: string().required(),
});

// const loginSchema = Joi.object({
// 	email: string().required(),
// 	password: string().min(6).required(),
// });

const schemas = {
	registerSchema,
	// loginSchema
};

const User = model("user", userSchema);

module.exports = {
	schemas,
	User,
};