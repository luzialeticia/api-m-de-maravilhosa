const express = require('express')
const router = express.Router()
const controller = require('../controllers/Maravilhosas')
const cors = require('cors')

router.get('/maravilhosas', cors(), controller.getAll)
router.get('/maravilhosas/:id', cors(), controller.getById)
router.post('/maravilhosas', cors(), controller.create)
router.put('/maravilhosas/:id', cors(), controller.update)

module.exports = router