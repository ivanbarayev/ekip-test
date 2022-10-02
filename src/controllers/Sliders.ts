import { Request, Response } from 'express';
import Formatter from '../libs/Formatter';
import Sliders from '../models/Sliders';

const createSlider = (req: Request, res: Response) => {
    const { productId, image } = req.body;

    const filters = { productId: productId };
    const fields = { image: image };
    const options = { new: false, upsert: true, _id: null };

    return Sliders.findOneAndUpdate(filters, fields, options)
        .then(() => res.status(200).json(Formatter.responser(false, 'Slide added successfully')))
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

const getAllSlides = (req: Request, res: Response) => {
    const filters = { isFavorite: true };
    const projection = '-_id productId image';

    return Sliders.find(filters, projection)
        .then((slides) => res.status(200).json(Formatter.responser(false, 'Success', slides)))
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

export default { createSlider, getAllSlides };
