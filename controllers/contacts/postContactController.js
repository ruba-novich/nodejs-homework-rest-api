const { BadRequest } = require('http-errors')
const joySchema = require('../../middlewares/validation/contacts')
const contactsOperations = require('../../models/contacts')

const postContactController = async (req, res, next) => {
  try {
    const { error } = joySchema.validate(req.body)
    if (error) {
      throw new BadRequest(error.message)
    }
    const result = await contactsOperations.addContact(req.body)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = postContactController
