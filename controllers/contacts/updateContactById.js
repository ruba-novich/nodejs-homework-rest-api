const contactsOperations = require('../../models/contacts')
const { NotFound } = require('http-errors')

const updateContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperations.updateContactById(contactId, req.body)
  if (!result) {
    throw new NotFound('Not found')
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateContactById
