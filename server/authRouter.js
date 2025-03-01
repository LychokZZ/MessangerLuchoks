const Router = require('express')
const router = new Router
const controller = require('./authContoller')

router.post('/registration', controller.registation)
router.post('/sendLetter', controller.sendLetter)
router.get('/getLetter', controller.getLetter)


module.exports = router 