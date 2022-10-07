const { RequestError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = updateContact;
