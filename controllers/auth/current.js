
const { User } = require('../../models')
const { Unauthorized } = require('http-errors')

const current = async (req, res, next) => {
  const { _id } = req.user
  const currentUser = await User.findById(_id, 'email subscription')
  if (!currentUser) {
    throw new Unauthorized('Not authorized')
  }
  const { email, subscription } = currentUser
  res.status(200).json({ status: 'ok', code: 200, data: { email, subscription } })
}

module.exports = current
