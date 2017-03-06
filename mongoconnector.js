/**
 * Created by Rajendra on 04/03/17.
 */

var MongoClient = require('mongodb').MongoClient;
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/video', function (err, data) {
    assert.equal(null, err);
    console.log("Successfully connected to server");

    data.collection('movies').find({}).toArray(function(err, docs){

        docs.forEach(function (doc) {
            console.log(doc.title);
        });
        data.close();
    });
});

console.log("called find on collection");
