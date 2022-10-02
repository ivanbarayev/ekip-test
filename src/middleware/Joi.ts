import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { ICategories } from '../models/Categories';
import { IProducts } from '../models/Products';
import { IFavorites } from '../models/Favorites';
import { ISliders } from '../models/Sliders';

export const ValidateJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            console.log(error);

            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    categories: {
        create: Joi.object<ICategories>({
            name       : Joi.string().required(),
            description: Joi.string().required()
        }),
        update: Joi.object<ICategories>({
            name       : Joi.string().required(),
            description: Joi.string().required()
        })
    },
    products  : {
        create: Joi.object<IProducts>({
            name       : Joi.string().required(),
            description: Joi.string().required(),
            category   : Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            price      : Joi.number().default(0),
            isFavorite : Joi.boolean().default(false)
        })
    },
    favorites : {
        add: Joi.object<IFavorites>({
            productId : Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            isFavorite: Joi.boolean().required()
        })
    },
    slider    : {
        create: Joi.object<ISliders>({
            productId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            image    : Joi.string().required()
        }),
        read  : Joi.object<ISliders>({
            productId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    }
};
