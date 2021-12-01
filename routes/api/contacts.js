const express = require('express')
const router = express.Router()
const { validation, controllerWrapper } = require('../../middlewares')
const { joiContactsSchema } = require('../../models/contact')
const { contactsController: ctrl } = require('../../controllers')

router.get('/', controllerWrapper(ctrl.getAllContacts))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post('/', validation(joiContactsSchema), controllerWrapper(ctrl.postContact))

router.delete('/:contactId', controllerWrapper(ctrl.deleteContact))

router.put('/:contactId', validation(joiContactsSchema), controllerWrapper(ctrl.updateContactById))

router.patch('/:contactId/favorite', controllerWrapper(ctrl.updateStatusContact))

module.exports = router
