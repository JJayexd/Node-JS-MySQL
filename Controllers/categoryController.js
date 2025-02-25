import express from 'express';
import categoryModel from '../Models/categoryModel.js';

export const categoryController = express.Router();

categoryController.get('/categories', async (req, res) => {
    res.send('categorys');
})

categoryController.get('/categories/:cat([0-9]*)/:id([0-9]*)', async (req, res) => {
    const { id } = req.params;
    console.log(id);

    res.send(id);
})