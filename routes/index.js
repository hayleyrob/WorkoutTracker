//define exress router
const router = require('express').Router()
//require api routes
router.use('/api', require('./apiRoutes.js'))
router.use('/api', require('./statsRoutes.js'))
//export out router folder
module.exports = router