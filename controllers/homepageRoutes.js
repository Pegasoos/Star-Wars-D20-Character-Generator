const router = require('express').Router();
const { User, D20_Character} = require('../models');

router.get('/', async (req, res) => {
    try{
        res.render('homepage');
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;