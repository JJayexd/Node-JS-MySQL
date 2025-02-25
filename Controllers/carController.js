import express from 'express';
import carModel from '../Models/carModel.js';

export const carController = express.Router();

carController.get('/cars', async (req, res) => {
    try {
        const result = await carModel.findAll();
        res.json(result);
    } catch  (error) {
        console.log(error);
    }
})

carController.get('/cars/:cat([0-9]*)/:id([0-9]*)', async (req, res) => {
    const { id } = req.params;
    console.log(id);

    res.send(id);
})

carController.post('/cars', async (req, res) => {
    console.log(req.body);

    try {
        const result = await carModel.create(req.body);
        res.status(201).send({
            message: 'Created', data: result});
    } catch (error) {
        console.log(error);
    }
})