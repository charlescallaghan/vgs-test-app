import express from 'express';
require('dotenv').config()

import dataRoutes from './routes/data.js'

const app = express();
const port = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/data', dataRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`)
})