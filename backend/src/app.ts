import 'reflect-metadata';
import express from 'express';
import {createConnection} from 'typeorm';
import 'dotenv/config';
import cors from 'cors';

import {config} from "./config";
import {apiRouter} from "./routes";



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(cors());

app.use(apiRouter);




const {PORT} = config;
app.listen(PORT, async () => {
    console.log(`Server started on PORT:${PORT}`);
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connection!');
        }
    } catch (err) {
        if (err) console.log(err);
    }
})
