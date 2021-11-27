const { NotFound } = require('http-errors')
const contactsOperations = require('../../models/contacts')

const deleteContactController = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await contactsOperations.removeContact(contactId)
    if (!result) {
      throw new NotFound('Not found')
    }
    res.json({
      status: 'success',
      code: 200,
      message: 'contact deleted'
    })
  } catch (error) {
    next(error)
  }
  // res.json({ message: 'template message' })
}

module.exports = deleteContactController
