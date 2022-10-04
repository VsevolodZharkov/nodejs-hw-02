const { RequestError } = require("../../helpers");

const { Contact } = require("../../models/contact");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};
module.exports = getContactById;
