const Router = require('express')
const router = new Router
const controller = require('./authContoller')

router.post('/registration', controller.registation)
router.post('/sendLetter', controller.sendLetter)
router.get('/getLetter', controller.getLetter)
router.get('/getcontact', controller.getContact)


module.exports = router 