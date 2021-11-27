const contactsOperations = require('../../models/contacts')
const { NotFound } = require('http-errors')

const getContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await contactsOperations.getContactById(contactId)
    if (!result) {
      throw new NotFound('Not found')
    }
    res.json({
      status: 'success',
      code: 200,
      data: { result }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getContactByIdController
