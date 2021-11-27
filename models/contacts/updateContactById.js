const { getAllContacts } = require('./methods')
const { updateContacts } = require('./methods')

const updateContactById = async (contactId, body) => {
  const contacts = await getAllContacts()
  const idx = contacts.findIndex(({ id }) => id === Number(contactId))
  if (idx === -1) {
    return null
  }
  contacts[idx] = { id: Number(contactId), ...body }
  await updateContacts(contacts)
  return contacts[idx]
}

module.exports = updateContactById
