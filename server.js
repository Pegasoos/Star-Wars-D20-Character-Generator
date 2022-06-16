const express = require('express');
const app = express();
const path = require('path');

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 7777;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Serving at http://localhost:${PORT}`)
});