const contactsOperations = require('../../models/contacts')
const { BadRequest, NotFound } = require('http-errors')
const joySchema = require('../../middlewares/validation/contacts')

const updateContactByIdController = async (req, res, next) => {
  try {
    const { error } = joySchema.validate(req.body)
    if (error) {
      throw new BadRequest(error.message)
    }

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
  } catch (error) {
    next(error)
  }
}

module.exports = updateContactByIdController
