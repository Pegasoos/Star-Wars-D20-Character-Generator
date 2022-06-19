const router = require('express').Router();
const D20_Character = require('../../models/D20_Character');

router.post('/', async (req, res) => {
    try{
        const newCharacter = await D20_Character.create({
            ...req.body,
            creator_id: req.session.user_id
        });
        res.status(200).json(newCharacter);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try{
        const characterToUpdate = await D20_Character.findOne({where:{id:req.params.id}});
        const updatedCharacter = await characterToUpdate.update({
        ...req.body,
        creator_id:req.session.user_id
    })
        res.status(200).json(updatedCharacter);
}
    catch (err){
        res.status(400).json(err);
    }
});

module.exports = router;