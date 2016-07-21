var express = require('express');
var router = express.Router();

var rootCrumb = ['/data-structures', 'Data Structures'];

router.get('/', function (req, res) {
	res.render('data-structures/index', {
		_: {
			activePage: 'root',
			title: 'Data Structures',
			breadcrumbs: [rootCrumb]
		}
	});
});

router.get('/arrays', function (req, res) {
	res.render('data-structures/arrays', {
		_: {
			activePage: 'root',
			title: 'Data Structures',
			breadcrumbs: [
				rootCrumb,
				['/data-structures/arrays', 'Arrays']
			]
		}
	});
});

module.exports = router;