import express from 'express';
import controller from '../controllers/Categories';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.categories.create), controller.createCategory);
router.get('/', controller.getAllCategories);
router.get('/:categoryId', controller.getCategoryInfo);
router.get('/:categoryId/products', controller.getProductsOfCategory);


export = router;
