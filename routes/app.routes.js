const express = require('express');
const Productcontroller = require('../controllers/app.controller');

const router = express.Router();

router.post('/create', Productcontroller.product_create);
router.get('/:id', Productcontroller.product_details);
router.put('/:id/update', Productcontroller.product_update);
router.put('/:id/update', Productcontroller.product_update);
router.delete('/:id/delete', Productcontroller.product_delete);
module.exports = router;
