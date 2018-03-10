//express setup
var express = require('express');
var router = express.Router();

//controllers
var scrape = require('../controllers/scrape');
var headline = require('../controllers/headline');
var note = require('../controllers/note');

router.route('/load').get(scrape.load);
router.route('/scrape').get(scrape.fetch);

// router.route('/').post(movieCtrl.postMovie);
// router.route('/movies').get(movieCtrl.getMovies);

module.exports = router;