const express = require('express');
const {getSkus,getSku,createSku,updateSku,deleteSku} = require('../controllers/skus');

const router = express.Router();


router.route('/').get(getSkus).post(createSku);
router.route('/:id').get(getSku).put(updateSku).delete(deleteSku);

module.exports=router;
