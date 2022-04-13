const express = require('express');
const {getSkus,getSku,createSku} = require('../controllers/skus');

const router = express.Router();


router.route('/').get(getSkus).post(createSku);
router.route('/:id').get(getSku);

module.exports=router;
