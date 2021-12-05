const { User } = require('../../models')
const { NotFound } = require('http-errors')

const verify = async (req, res, next) => {
  const { verificationToken } = req.params
  const user = await User.findOne({ verificationToken })
  const id = user._id
  if (!user) {
    throw new NotFound('User not found')
  }
  await User.findByIdAndUpdate(id, { verificationToken: null, verify: true })
  res.status(200).json({
    status: 'Ok',
    code: 200,
    data: {
      message: 'Verification successful',
    }
  }
  )
}

module.exports = verify
