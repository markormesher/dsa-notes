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
				['/data-structures/arrays', 'Arrays'],
				['/data-structures/dynamic-arrays', 'Dynamic Arrays']
			]
		}
	});
});

router.get('/linked-lists', function (req, res) {
	res.render('data-structures/linked-lists', {
		_: {
			activePage: 'root',
			title: 'Linked Lists',
			breadcrumbs: [
				rootCrumb,
				['/data-structures/linked-lists', 'Linked Lists']
			]
		}
	});
});

router.get('/stacks', function (req, res) {
	res.render('data-structures/stacks', {
		_: {
			activePage: 'root',
			title: 'Stacks',
			breadcrumbs: [
				rootCrumb,
				['/data-structures/stacks', 'Stacks']
			]
		}
	});
});

module.exports = router;