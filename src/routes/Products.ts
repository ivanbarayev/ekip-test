import express from 'express';
import controller from '../controllers/Products';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.products.create), controller.createProduct);
router.get('/:productId', controller.getProductInfo);


export = router;
