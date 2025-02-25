import express from 'express';
import brandModel from '../Models/brandModel.js';

export const brandController = express.Router();

brandController.get('/brands', async (req, res) => {
    res.send('brands');
})

brandController.get('/brands/:cat([0-9]*)/:id([0-9]*)', async (req, res) => {
    const { id } = req.params;
    console.log(id);

    res.send(id);
})