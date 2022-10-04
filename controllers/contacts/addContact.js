const { RequestError } = require("../../helpers");
const { addSchema } = require("../../schemas/contacts");

const { Contact } = require("../../models/contacts")

const addCont = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }
  const result = await Contact.create(req.body);
  res.status(201).json(result);
  res.json(result);
};

module.exports = addCont;
