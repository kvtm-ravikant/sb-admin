/**
 * Created by Ravikant on 7/11/15.
 */
'use strict';

var path = require('path');
exports.partials = function(req, res) {
    var stripped = req.url.split('.')[0];
    var requestedView = path.join('./', stripped);
    console.log("requestedView",requestedView,stripped);
    res.render(requestedView, function(err, html) {
        if(err) {
            res.render('404');
        } else {
            res.send(html);
        }
    });
};

exports.index = function(req, res) {
    res.render('index');
};

