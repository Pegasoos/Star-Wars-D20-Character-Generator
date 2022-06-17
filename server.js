const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/connection')

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 7777;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Serving at http://localhost:${PORT}`);
    });
})