var assert = require('assert');

module.exports.insertCompany = function(db,callback) {
    db.collection('company').insertOne( {
        "company" : "TST"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the company collection.");
        callback();
    });
};