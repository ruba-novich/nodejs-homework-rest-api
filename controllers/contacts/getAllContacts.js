const { Contact } = require('../../models')

const getAllContacts = async (req, res) => {
  const { page, limit } = req.query
  const skip = (page - 1) * limit
  const { _id } = req.user
  const result = await Contact.find(
    { owner: _id },
    '_id name email',
    { skip, limit: +limit }).populate('owner', '_id email')
  res.json({
    status: 'success',
    code: 200,
    data: { result }
  })
}

module.exports = getAllContacts
