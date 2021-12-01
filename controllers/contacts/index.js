const getAllContacts = require('./getAllContacts')
const getContactById = require('./getContactById')
const postContact = require('./postContact')
const deleteContact = require('./deleteContact')
const updateContactById = require('./updateContactById')
const updateStatusContact = require('./updateStatusContact')

module.exports = {
  getAllContacts,
  getContactById,
  postContact,
  deleteContact,
  updateContactById,
  updateStatusContact
}
