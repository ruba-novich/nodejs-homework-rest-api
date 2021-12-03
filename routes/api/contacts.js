const express = require('express')
const router = express.Router()
const { validation, authenticate, controllerWrapper } = require('../../middlewares')
const { joiContactsSchema } = require('../../models/contact')
const { contactsController: ctrl } = require('../../controllers')

router.get('/', authenticate, controllerWrapper(ctrl.getAllContacts))

router.get('/:contactId', authenticate, controllerWrapper(ctrl.getContactById))

router.post('/', authenticate, validation(joiContactsSchema), controllerWrapper(ctrl.postContact))

router.delete('/:contactId', authenticate, controllerWrapper(ctrl.deleteContact))

router.put('/:contactId', authenticate, validation(joiContactsSchema), controllerWrapper(ctrl.updateContactById))

router.patch('/:contactId/favorite', authenticate, controllerWrapper(ctrl.updateStatusContact))

module.exports = router
