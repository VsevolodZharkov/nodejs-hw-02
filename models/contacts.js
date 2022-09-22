const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./models/contacts.json");
const { nanoid } = require("nanoid")

const getAll = async () => {
	const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
}

const getContactById = async (contactId) => {
	const data = await getAll();
	const result = data.find(item => item.id === String(contactId));
	return result || null;
}

const removeContact = async (contactId) => {
	const data = await getAll();
	const indexContactDelete = data.findIndex(item => item.id === String(contactId));
	const [result] = data.splice(indexContactDelete, 1);
	await fs.writeFile(contactsPath, JSON.stringify(data, null, 2))
	return result;
}

const addContact = async ({name, email, phone}) => {
	const data = await getAll();
	const newContact = {
		"id": nanoid(),
    name,
    email,
    phone: phone,
	}
	data.push(newContact)
	await fs.writeFile(contactsPath, JSON.stringify(data, null, 2))
	return newContact;
}

const updateContact = async (id, {name, phone, email}) => {
	const contacts = await getAll();
	const index = contacts.findIndex(item => item.id === id);
	if(index === -1) {
		return null;
	}
	contacts[index] = {id, name, phone, email};
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
	return contacts[index]
}

module.exports = {
  getAll,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
