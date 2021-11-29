const { v4 } = require('uuid')
const { getAllContacts, updateContacts } = require('./methods')

const addContact = async ({ name, email, phone }) => {
  const allContacts = await getAllContacts()
  // console.log(name)
  const newContact = { id: v4(), name, email, phone }
  allContacts.push(newContact)
  await updateContacts(allContacts)
  return newContact
}

module.exports = addContact
