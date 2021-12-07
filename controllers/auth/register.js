const fs = require('fs/promises')
const { User } = require('../../models')
const { Conflict } = require('http-errors')
const { nanoid } = require('nanoid')
const gravatar = require('gravatar')
const path = require('path')
const avatarDir = path.join(__dirname, '../../public/avatars')
const { sendMail } = require('../../helpers')

const register = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict({ message: 'Email in use' })
  }
  const verificationToken = nanoid()
  const avatarURL = gravatar.url(email)
  const result = new User({ email, avatarURL, verificationToken })
  const avatarFolder = path.join(avatarDir, String(result._id))
  result.setPassword(password)
  await result.save()
  await fs.mkdir(avatarFolder)
  const mail = {
    to: email,
    subject: 'For regestration',
    html: `<a href="//http://localhost:3000/api/auth/verify/${verificationToken}">Press to regestration</a>`
  }
  await sendMail(mail)
  res.status(201).json({
    status: 'Created',
    code: 201,
    data: {
      user: {
        email,
        avatarURL,
        subscription: 'starter'
      }
    }
  })
}

module.exports = register
