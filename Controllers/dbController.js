import express from 'express';
import dbConfig from '../Configs/sequelizeConfig.js';

export const dbController = express.Router();

dbController.get('/test', async (req, res) => {
    try {
        await dbConfig.authenticate({ force: true });
        res.send('Forbindelse oprettet.');
    } catch (error) {
        res.send(error);
    }
})

dbController.get('/sync', async (req, res) => {
    try {
        await dbConfig.sync({ force: true });
        res.send('Synkroniseret.');
    } catch (error) {
        res.send(error);
    }
})