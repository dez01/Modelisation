
const componentRouter = require('express').Router();
const componentController = require('../controllers/componentController');

componentRouter.get('/component', componentController.getComponents);
componentRouter.post('/component', componentController.createComponent);



module.exports = componentRouter;
