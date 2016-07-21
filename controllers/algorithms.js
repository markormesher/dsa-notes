var express = require('express');
var router = express.Router();

var rootCrumb = ['/algorithms', 'Algorithms'];

router.get('/', function (req, res) {
	res.render('algorithms/index', {
		_: {
			activePage: 'root',
			title: 'Algorithms',
			breadcrumbs: [rootCrumb]
		}
	});
});

module.exports = router;