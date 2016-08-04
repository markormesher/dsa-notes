var express = require('express');
var router = express.Router();

var rootCrumbs = [
	['/algorithms', 'Algorithms']
];

var pages = {
	'': {
		title: 'Algorithms'
	},
	'binary-search': {
		title: 'Binary Search'
	},
	'fractional-cascading': {
		title: 'Fractional Cascading'
	},
	'tree-algorithms': {
		title: 'Tree Algorithms'
	},
	'tree-traversals': {
		title: 'Tree Traversals',
		crumbs: [
			['/algorithms/tree-algorithms', 'Tree Algorithms']
		]
	}
};

router.get('/*', function (req, res, next) {
	var pageId = req.path.substr(1);

	if (!pages[pageId]) {
		next();
		return;
	}

	var page = pages[pageId];

	res.render('algorithms/' + (pageId == '' ? 'index' : pageId), {
		_: {
			title: page.title,
			breadcrumbs: rootCrumbs
				.concat(page.crumbs || [])
				.concat([
					['/algorithms/' + pageId, page.title]
				])
		}
	});
});

module.exports = router;