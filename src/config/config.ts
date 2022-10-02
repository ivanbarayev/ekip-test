import dotenv from 'dotenv';

dotenv.config();


const MONGO_DB_URI = `mongodb://${process.env.MONGO_ROOT_USER}:${process.env.MONGO_ROOT_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DEFAULT_DB}?authSource=admin`;;

    console.log(MONGO_DB_URI)
const APP_PORT = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000;

export const config = {
    mongo : {
        url: MONGO_DB_URI
    },
    server: {
        port: APP_PORT
    }
};
