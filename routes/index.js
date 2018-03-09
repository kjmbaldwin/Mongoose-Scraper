var express = require('express');
var fetch = require('../controllers/fetch');
var headline = require('../controllers/headline');
var note = require('../controllers/note');

var router = express.Router();

router.route('/this-is-the-url').get(fetch);
// router.route('/').post(movieCtrl.postMovie);
// router.route('/movies').get(movieCtrl.getMovies);

module.exports = router;