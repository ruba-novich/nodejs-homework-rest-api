const express = require('express')
const router = express.Router()
const { validation, controllerWrapper, authenticate } = require('../../middlewares')
const { joiUserSchema } = require('../../models/user')
const { userController: ctrl } = require('../../controllers')

router.post('/register', validation(joiUserSchema), controllerWrapper(ctrl.register))

router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.login))

router.get('/logout', authenticate, controllerWrapper(ctrl.logout))

router.get('/current', authenticate, controllerWrapper(ctrl.current))

module.exports = router
