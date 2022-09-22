const { RequestError } = require("../../helpers");
const contacts = require("../../models/contacts");
const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.getContactById(id);
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};
module.exports = getContactById;
