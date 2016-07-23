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
			title: 'Arrays',
			breadcrumbs: [
				rootCrumb,
				['/data-structures/arrays', 'Arrays']
			]
		}
	});
});

router.get('/dynamic-arrays', function (req, res) {
	res.render('data-structures/dynamic-arrays', {
		_: {
			activePage: 'root',
			title: 'Dynamic Arrays',
			breadcrumbs: [
				rootCrumb,
				['/data-structures/dynamic-arrays', 'Dynamic Arrays']
			]
		}
	});
});

module.exports = router;