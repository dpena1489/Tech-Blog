const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./newUserRoutes'); // Renamed the file to 'newUserRoutes.js'

router.use('/user', userRoutes);
router.use('/Comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;
