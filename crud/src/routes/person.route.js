const router = require('express').Router();
const Person = require('../controllers/person.controller');

// CREATE - Data creation
router.post('/', Person.create);
router.get('/', Person.findAll);
router.get('/:id', Person.findOne);
router.patch('/:id', Person.update);
router.delete('/:id', Person.delete);

module.exports = router;
