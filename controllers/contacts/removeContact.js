const { requestError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw requestError(404);
  }
  res.json({
    message: "Contacts deleted",
  });
};

module.exports = removeContact;
