const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

require('./libs/db');

const indexRouter = require('./routes/index');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

//Views
app.use('/', indexRouter);


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});


module.exports = app;