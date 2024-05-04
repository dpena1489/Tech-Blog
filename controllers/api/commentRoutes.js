const router = require('express').Router();
const {Comment} = require('../../models');

//Get route for testing
router.get('/', (req, res) => {
    Comment.findAll().then((userData) => {
        res.json(userData);
    });
});

//Add a comment
router.post('/', async (req, res)=>{
    try{
        const userData = await Comment.create({
            ...req.body, 
            user_id: req.session.user_id
        });
        res.status(200).json(userData);
    } catch (err){
        res.status(400).json(err);
    }
});

module.exports = router;