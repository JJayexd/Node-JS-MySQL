import express from 'express';
import carModel from '../Models/carModel.js';

export const carController = express.Router();

carController.get('/cars', async (req, res) => {
    res.send('Cars');
})

carController.get('/cars/:cat([0-9]*)/:id([0-9]*)', async (req, res) => {
    const { id } = req.params;
    console.log(id);

    res.send(id);
})