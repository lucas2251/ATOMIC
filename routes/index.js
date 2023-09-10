const express = require('express')
const router = express.Router()

let {contacto, beneficios, planes,inicio} = require('../controllers/indexController')

router.get('/', inicio)
router.get('/contacto', contacto);
router.get('/beneficios', beneficios);
router.get('/planes', planes)


module.exports = router