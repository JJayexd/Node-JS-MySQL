import http from 'http';
import express from 'express';

import { sequelize } from './config/sequelizeConfig.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 7900;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Meow');
    response.end();
    console.log('Server meowede tilbage.');
}) 

app.listen(port, () => {
    console.log('Express server is running..');
})

app.get("/", (req, res) => {
    res.send('Meow');
});
  
app.get('/about', (req, res) => {
    res.send('About');
});
  
app.get('/contact', (req, res) => {
    res.send('Contact');
});

app.get('/test', async(req, res) => {
    try {
        await sequelize.authenticate();
        console.log('Der er forbindelse til databasen');
        res.send('Der er forbindelse til databasen');
    } catch (error) {
        console.error ('Fejl! Kunne ikke forbinde til databasen', error);
        res.status(500).send('Fejl! Kunne ikke forbinde til databasen');
    }
})
