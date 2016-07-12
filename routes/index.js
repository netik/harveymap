var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		    title: 'HarveyMap', 
		    apikey: process.env.GMAPI_KEY,
		    fbase_apikey: process.env.FBASEAPI_KEY
		   });
});

module.exports = router;
