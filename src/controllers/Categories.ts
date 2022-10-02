import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Categories from '../models/Categories';
import Formatter from '../libs/Formatter';
import Products from '../models/Products';

const createCategory = (req: Request, res: Response) => {
    const { name, description } = req.body;

    const category = new Categories({
        _id: new mongoose.Types.ObjectId(),
        name,
        description
    });

    return category
        .save()
        .then(() => res.status(200).json(Formatter.responser(false, 'Category added successfully')))
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

const getAllCategories = (req: Request, res: Response) => {

    const projection = '_id name';

    return Categories.find({}, projection)
        .then((categories) => res.status(200).json(Formatter.responser(false, 'Success', categories)))
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

const getCategoryInfo = (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;

    const projection = '_id name description';

    return Categories.findById(categoryId, projection)
        .then((category) => {
            if(category) {
                res.status(200).json(Formatter.responser(false, 'Success', category));
            } else {
                res.status(404).json(Formatter.responser(false, 'Category Not Found'));
            }
        })
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

const getProductsOfCategory = (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;

    const filter = { category: categoryId };
    const projection = '_id name description price isFavorite';

    return Products.find(filter, projection)
        .then((products) => {
            if(products) {
                res.status(200).json(Formatter.responser(false, 'Success', products));
            } else {
                return res.status(404).json(Formatter.responser(false, 'Product Not Found'));
            }
        })
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

export default { createCategory, getAllCategories, getCategoryInfo, getProductsOfCategory };
