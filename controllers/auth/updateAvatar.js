const fs = require('fs/promises')
const path = require('path')
const Unauthorized = require('http-errors')
const Jimp = require('jimp')
const { User } = require('../../models')

const avatarDir = path.join(__dirname, '../../public/avatars')

const updateAvatar = async (req, res) => {
  const { _id } = req.user
  const strId = String(_id)
  const { path: tempUpload, originalname } = req.file
  try {
    const avatar = path.join('avatars', strId, `${strId}_${originalname}`)
    const resultUpload = path.join(avatarDir, strId, `${strId}_${originalname}`)
    await fs.rename(tempUpload, resultUpload)
    Jimp.read(resultUpload)
      .then(result => {
        return result
          .resize(250, 250)
          .write(resultUpload)
      })
      .catch(err => {
        throw err
      })
    const user = await User.findByIdAndUpdate(_id, { avatarURL: avatar }, { new: true })
    if (!user) {
      throw new Unauthorized('Not authorized')
    }
    const { avatarURL } = user
    res.status(200).json({ avatarURL })
  } catch (error) {
    await fs.unlink(tempUpload)
    throw error
  }
}
module.exports = updateAvatar
