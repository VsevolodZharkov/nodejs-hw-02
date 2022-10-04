const { RequestError } = require("../../helpers");
const { Contact } = require("../../models/contacts");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw RequestError(404);
  }
  res.json({
    message: "Contacts deleted",
  });
};

module.exports = removeContact;
