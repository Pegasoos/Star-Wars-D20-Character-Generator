const router = require('express').Router();
const { User, D20_Character} = require('../models');

router.get('/', (req, res) => {
    try{
        res.render('homepage');
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
router.get('/profile', (req, res) => {
    try{
        res.render('profile');
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
router.get('/new-character-1', (req, res) => {
    try{
        res.render('new-character-1');
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
router.get('/new-character-2', (req, res) => {
    try{
        res.render('new-character-2');
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
router.get('/new-character-3', (req, res) => {
    try{
        res.render('new-character-3');
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;