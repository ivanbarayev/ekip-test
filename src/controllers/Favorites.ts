import { Request, Response } from 'express';
import Products from '../models/Products';
import Formatter from '../libs/Formatter';

const addOrRemoveFavorites = (req: Request, res: Response) => {
    const { productId, isFavorite } = req.body;

    const filters = { isFavorite: isFavorite };
    return Products.findByIdAndUpdate(productId, filters)
        .then((product) => {
            if(product) {
                res.status(200).json(Formatter.responser(false, `Product ${ isFavorite ? 'added' : 'removed' } successfully`));
            } else {
                return res.status(404).json(Formatter.responser(false, 'Product Not Found'));
            }
        })
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

const getAllFavoritedProducts = (req: Request, res: Response) => {
    const filter = { isFavorite: true };
    const projection = '_id name description price category isFavorite';

    return Products.find(filter, projection)
        .then((products) => res.status(200).json(Formatter.responser(false, 'Success', products)))
        .catch((error) => res.status(500).json(Formatter.responser(true, error)));
};

export default { addOrRemoveFavorites, getAllFavoritedProducts };
