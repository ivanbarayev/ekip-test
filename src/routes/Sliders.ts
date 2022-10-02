import express from 'express';
import controller from '../controllers/Sliders';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.slider.create), controller.createSlider);
router.get('/', controller.getAllSlides);

export = router;
