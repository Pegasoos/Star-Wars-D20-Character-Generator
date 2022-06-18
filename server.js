const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/connection')

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 7777;

const routes = require('./controllers')

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Serving at http://localhost:${PORT}`);
    });
})