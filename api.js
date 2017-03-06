/**
 * Created by Rajendra on 04/03/17.
 */

var express = require('express');
    api = express();

    api.get('/', function (req, res) {
        res.send('Hello World!!');
    })

    api.use(function (req, res) {
        res.sendStatus(404);
    })

var server = api.listen(3000, function(){
        var port = server.address().port;
        console.log('Express server listening on port %s', port);
})