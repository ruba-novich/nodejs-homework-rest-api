const chalk = require('chalk')
const { getAllContacts, updateContacts } = require('./methods')

const removeContact = async(contactId) => {
  const allContacts = await getAllContacts()
  const indexContact = allContacts.findIndex(item => {
    if (Number(contactId)) {
      return item.id === Number(contactId)
    }
    return item.id === contactId
  })
  if (indexContact === -1) {
    console.log(chalk.red('Contact with this ID not found!'))
    return null
  }
  const removeContact = allContacts.splice(indexContact, 1)
  updateContacts(allContacts)
  return removeContact
}

module.exports = removeContact
