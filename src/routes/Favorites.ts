import express from 'express';
import controller from '../controllers/Favorites';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.favorites.add), controller.addOrRemoveFavorites);
router.get('/', controller.getAllFavoritedProducts);

export = router;
