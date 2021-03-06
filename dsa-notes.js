const PORT = 3002;

var path = require('path'),
	express = require('express'),
	sassMiddleware = require('node-sass-middleware'),
	rfr = require('rfr'),

// start app
app = express();

// middleware: SASS
app.use(sassMiddleware({
	src: __dirname + '/assets/',
	dest: __dirname + '/public',
	outputStyle: 'compressed'
}));

// pull routes from controllers folder
app.use('/', rfr('./controllers/root'));
app.use('/data-structures', rfr('./controllers/data-structures'));
app.use('/algorithms', rfr('./controllers/algorithms'));

// stop favicon requests
app.use('/favicon.ico', function (req, res) {
	res.end();
});

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// general error handler
app.use(function (error, req, res, next) {
	res.status(error.status || 500);
	res.render('root/error', {
		_: {
			title: error.status + ': ' + error.message
		},
		status: error.status || 500,
		error: app.get('env') == 'development' ? error : null
	});
});

server = app.listen(PORT);
console.log("Server listening on port: " + PORT);
