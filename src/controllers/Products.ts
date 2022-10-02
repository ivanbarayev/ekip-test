import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Products from '../models/Products';
import Formatter from '../libs/Formatter';

const createProduct = (req: Request, res: Response) => {
    const { name, description, category, price } = req.body;

    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        name,
        description,
        category,
        price
    });

    return product
        .save()
        .then(() => res.status(201).json(Formatter.responser(false, 'Product added successfully')))
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

const getProductInfo = (req: Request, res: Response) => {
    const productId = req.params.productId;

    const projection = '_id name description price isFavorite';

    return Products.findById(productId, projection)
        .then((product) => {
            if(product) {
                res.status(200).json(Formatter.responser(false, 'Success', product));
            } else {
                return res.status(404).json(Formatter.responser(false, 'Product Not Found'));
            }
        })
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

export default { createProduct, getProductInfo };
