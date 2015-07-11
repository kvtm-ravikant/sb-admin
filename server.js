/**
 * Created by Ravikant on 7/11/15.
 */
'use strict';
var http = require('http');
http.globalAgent.maxSockets = Infinity;
var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var rootPath = path.normalize(__dirname);
console.log("rootPath",rootPath);
// Disable caching of scripts for easier testing
app.use(function noCache(req, res, next) {
    if (req.url.indexOf('/scripts/') === 0) {
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);
    }
    next();
});

app.use(express.static(path.join(rootPath, '.tmp')));
app.use(express.static(path.join(rootPath, 'app')));
app.use(express.static(path.join(rootPath, 'downloads')));
app.use(express.errorHandler());
app.use(compression());
app.set('views', rootPath + '/app/views');
app.configure(function(){
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(express.logger('dev'));
    app.use(express.bodyParser({limit: '50mb'}));
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({
        secret: 'sb-admin-123456'
    }));
    // Router needs to be last
    app.use(app.router);
});
var index = require('./');
// Angular Routes
app.get('/partials/*', index.partials);

app.get('/index', index.index);
app.get('/', index.index);

var server=app.listen("9000",function(){
    console.log("app running at 9000");
});