
const componentRouter = require('./componentRoute');
const router = require('express').Router();

router.use('/api', componentRouter);


module.exports = router;