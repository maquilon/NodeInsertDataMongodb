var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/BurnDownTracker';
var ObjectId = require('mongodb').ObjectID;

var data = require('./data.js');

MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");

    data.insertCompany(db, function () {});
    data.insertWorcenter(db, function () {}); 
    data.insertRates(db, function () {});   
    data.insertUser(db, function () {});    
    data.insertGSARates(db, function () {});    
    data.insertUserTime(db, function () { db.close(); });            
});