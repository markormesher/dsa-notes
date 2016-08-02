var express = require('express');
var router = express.Router();

var rootCrumbs = [
	['/data-structures', 'Data Structures']
];

var pages = {
	'': {
		title: 'Data Structures'
	},
	'arrays': {
		title: 'Arrays'
	},
	'balanced-trees': {
		title: 'Balanced Trees',
		crumbs: [
			['/data-structures/trees', 'Trees']
		]
	},
	'binary-search-trees': {
		title: 'Binary Search Trees',
		crumbs: [
			['/data-structures/trees', 'Trees']
		]
	},
	'deques': {
		title: 'Double-Ended Queues (Deques)'
	},
	'dynamic-arrays': {
		title: 'Dynamic Arrays',
		crumbs: [
			['/data-structures/arrays', 'Arrays']
		]
	},
	'linked-lists': {
		title: 'Linked Lists'
	},
	'queues': {
		title: 'Queues'
	},
	'sparse-arrays': {
		title: 'Sparse Arrays',
		crumbs: [
			['/data-structures/arrays', 'Arrays']
		]
	},
	'stacks': {
		title: 'Stacks'
	},
	'trees': {
		title: 'Trees'
	}
};

router.get('/*', function (req, res, next) {
	var pageId = req.path.substr(1);

	if (!pages[pageId]) {
		next();
		return;
	}

	var page = pages[pageId];

	res.render('data-structures/' + (pageId == '' ? 'index' : pageId), {
		_: {
			title: page.title,
			breadcrumbs: rootCrumbs
				.concat(page.crumbs || [])
				.concat([
					['/data-structures/' + pageId, page.title]
				])
		}
	});
});

module.exports = router;