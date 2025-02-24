import http from 'http';
import express from 'express';

import sequelize from './Configs/sequelizeConfig.js';
import carModel from './Models/carModel.js';
import categoryModel from './Models/categoryModel.js';
import brandModel from './Models/brandModel.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 7900;

// http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write('createServer');
//     response.end();
//     console.log('createServer kørt');
// }) 

app.listen(port, () => {
    console.log('Running..');
})

app.get("/", (req, res) => {
    res.status(200).json({
        message: "BOOM SAKALAKA"
    })
});
  
app.get('/about', (req, res) => {
    res.status(200).json({
        message: "About"
    })
});
  
app.get('/contact', (req, res) => {
    res.status(200).json({
        message: "Contact"
    })
});

app.get('/test', async(req, res) => {
    try {
        await sequelize.authenticate();
        console.log('Der er forbindelse til databasen');
        res.send('Der er forbindelse til databasen');
    } catch (error) {
        console.error ('Fejl: Kunne ikke forbinde til databasen', error);
        res.status(500).send('Fejl: Kunne ikke forbinde til databasen');
    }
})

app.get('/sync', async (req, res) => {
    try {
        await sequelize.sync({ force: true });
        res.send('Synkroniseret.');
    } catch (error) {
        res.status(500).send('Fejl', error);
    }
})

app.get('*', (req, res) => {
    res.status(404).json({
        message: "404"
    })
});