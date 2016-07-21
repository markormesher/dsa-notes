var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('root/index', {
		_: {
			activePage: 'root',
			title: 'Data Structures &amp; Algorithms Notes'
		}
	});
});

module.exports = router;