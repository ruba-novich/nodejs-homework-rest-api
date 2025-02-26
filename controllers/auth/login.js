const { BadRequest } = require('http-errors')
const jwt = require('jsonwebtoken')
const { User } = require('../../models')
const { SECRET_KEY } = process.env

const login = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user || !user.comparePassword(password)) {
    throw new BadRequest('Email or password is wrong')
  }

  const payload = {
    id: user._id
  }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
  await User.findByIdAndUpdate(user._id, { token })
  res.json({
    status: 'Ok',
    code: 200,
    data: {
      token,
      user: {
        email,
        subscription: 'starter'
      }
    }
  })
}

module.exports = login
