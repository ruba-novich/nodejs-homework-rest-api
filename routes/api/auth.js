const express = require('express')
const router = express.Router()
const { validation, controllerWrapper, authenticate, upload } = require('../../middlewares')
const { joiUserSchema } = require('../../models/user')
const { userController: ctrl } = require('../../controllers')

router.post('/register', validation(joiUserSchema), controllerWrapper(ctrl.register))

router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.login))

router.get('/logout', authenticate, controllerWrapper(ctrl.logout))

router.get('/current', authenticate, controllerWrapper(ctrl.current))

router.patch('/avatars', authenticate, upload.single('avatarURL'), controllerWrapper(ctrl.updateAvatar))

router.get('/verify/:verificationToken', controllerWrapper(ctrl.verify))

router.post('/verify/', controllerWrapper(ctrl.repeatVerify))

module.exports = router
