var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/BurnDownTracker';

var data = require('./data.js');

MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    data.insertCompany(db, function () {
        db.close();
    });
});