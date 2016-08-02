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
	'binary-tree-traversals': {
		title: 'Binary Tree Traversals',
		crumbs: [
			['/algorithms/tree-algorithms', 'Tree Algorithms']
		]
	},
	'tree-algorithms': {
		title: 'Tree Algorithms'
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