const validation = require('./validation')
const authenticate = require('./authenticate')
const controllerWrapper = require('./controllerWrapper')
const upload = require('./upload')

module.exports = {
  upload,
  validation,
  controllerWrapper,
  authenticate
}
