import express from 'express';
import { createServer } from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import morgan from 'morgan';
import CategoriesRoutes from './routes/Categories';
import ProductsRoutes from './routes/Products';
import FavoritesRoutes from './routes/Favorites';
import SlidersRoutes from './routes/Sliders';
import Formatter from './libs/Formatter';

const app = express();

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log(`[${ new Date().toLocaleString() }] -> [INF] = Connected to MongoDB Cloud !`);
        StartServer();
    })
    .catch((error) => {
        console.log(error);
    });

const StartServer = () => {
    app.use(express.json({ limit: '30mb' }));
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('tiny'));

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if(req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'POST, GET');
            return res.status(200).json({});
        }

        next();
    });


    /** Routess */
    app.use('/categories', CategoriesRoutes);
    app.use('/products', ProductsRoutes);
    app.use('/sliders', SlidersRoutes);
    app.use('/favorites', FavoritesRoutes);

    /** Healthcheck */
    app.get('/ping', (req, res) => res.status(200).json({ hello: 'world' }));

    /** Error handling */
    app.use((req, res) => {
        const error = new Error('Not found');

        console.log(`[${ new Date().toLocaleString() }] -> [INF] = ${ error.message } !`);

        res.status(404).json(Formatter.responser(true, error.message));
    });

    createServer(app).listen(config.server.port, () => console.log(`[${ new Date().toLocaleString() }] -> [INF] = Server is running on port ${ config.server.port }`));
};
