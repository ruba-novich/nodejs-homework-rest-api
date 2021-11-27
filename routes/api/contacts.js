const express = require('express')
const router = express.Router()
const { validation, controllerWrapper } = require('../../middlewares')
const { joiContactsSchema } = require('../../validations')
const { contactsController: ctrl } = require('../../controllers')

router.get('/', controllerWrapper(ctrl.getAllContacts))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post('/', validation(joiContactsSchema), controllerWrapper(ctrl.postContact))

router.delete('/:contactId', controllerWrapper(ctrl.deleteContact))

router.put('/:contactId', validation(joiContactsSchema), controllerWrapper(ctrl.updateContactById))

module.exports = router
