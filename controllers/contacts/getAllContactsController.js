const contactsOperations = require('../../models/contacts')

const getAllContactsController = async (req, res, next) => {
  try {
    const result = await contactsOperations.listContacts()
    res.json({
      status: 'success',
      code: 200,
      data: { result }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllContactsController
