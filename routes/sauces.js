const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const likingAlgo = require('../middleware/likingSystem');

const saucesCtrl = require('../controllers/sauces');

router.post('/', auth, multer, saucesCtrl.createThing);
router.post('/:id/like', auth, likingAlgo, saucesCtrl.likeOrDislike);
router.get('/:id', auth, saucesCtrl.getOneThing);
router.put('/:id', auth, multer, saucesCtrl.modifyThing);
router.delete('/:id', auth, saucesCtrl.deleteThing);
router.get('/', auth, saucesCtrl.getAllStuff);

module.exports = router;