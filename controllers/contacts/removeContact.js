const { RequestError } = require("../../helpers");
const contacts = require("../../models/contacts");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw RequestError(404);
  }
  res.json({
    message: "Book deleted",
  });
};

module.exports = removeContact;
