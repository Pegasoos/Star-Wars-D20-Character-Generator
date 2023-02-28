const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dotenv = require('dotenv').config();

const exhbs = require('express-handlebars');
const hbs = exhbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 7777;

const routes = require('./controllers');

const sess = {
    rolling:true,
    secret:process.env.SECRET,
    resave:true,
    saveUninitialized:false,
    store: new SequelizeStore({
      db: sequelize,
    })
  }
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Serving at http://localhost:${PORT}`);
    });
})