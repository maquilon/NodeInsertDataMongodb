var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

module.exports.insertCompany = function (db, callback) {
    db.collection('company').insertOne({
        "company": "TST"
    }, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into company collection.");
        callback();
    });
};

module.exports.insertWorcenter = function (db, callback) {
    db.collection('workcenter').insertOne({
        "work_center": "work center name"
    }, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into workcenter collection.");
        callback();
    });
};

module.exports.insertRates = function (db, callback) {
    db.collection('rates').insertOne({
        "labor_cat_id": "101G",
        "labor_category": "Configuration Management Specialist (Senior)",
        "options": [
            { "year": 0, "labor_rate": 5464 },
            { "year": 1, "labor_rate": 5764 },
            { "year": 2, "labor_rate": 5964 }
        ]
    }, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into rates collection.");
        callback();
    });
};

module.exports.insertUser = function (db, callback) {
    db.collection('user').insertOne({
        "first_name": "Ronald",
        "last_name": "Butler",
        "full_name": "Ronad E Butler",
        "email": "ebutler@t-sciences.com",
        "phone": "9992334322",
        "assigned_labor_cat":
        [
            {
                "year": 0,
                "start": Date("2016-09-09T14:12:24.896Z"),
                "end": Date("2016-09-09T14:12:24.896Z"),
                "clin_id": ObjectId("57d2a9376d213c0106130345"),
                "labor_id": ObjectId("57d2a9376d213c0106131026"),
                "labor_cat_id": "101G",
                "location": "southcom",
                "company": "TST",
                "work_center": "work center name",
                "supervisor_id": ObjectId("57d2a9376d213c0106131026")
            },
            {
                "year": 0,
                "start": Date("2016-09-09T14:12:24.896Z"),
                "end": Date("2016-09-09T14:12:24.896Z"),
                "clin_id": ObjectId("57d2a9376d213c0106130345"),
                "labor_id": ObjectId("57d2a9376d213c0106130345"),
                "location": "southcom",
                "labor_cat_id": "108G",
                "company": "TST",
                "work_center": "work center name",
                "supervisor_id": ObjectId("57d2a9376d213c0106131234")
            },
            {
                "year": 1,
                "start": Date("2016-09-09T14:12:24.896Z"),
                "end": null,
                "clin_id": ObjectId("57d2a9376d213c0106130345"),
                "labor_id": ObjectId("57d2a9376d213c0106145623"),
                "labor_cat_id": "104G",
                "location": "southcom",
                "company": "TST",
                "work_center": "work center name",
                "supervisor_id": ObjectId("57d2a9376d213c0106135465")
            }
        ]

    }, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into users collection.");
        callback();
    });
};

module.exports.insertGSARates = function (db, callback) {
    db.collection('GSARates').insertOne({
        "clin_title": "JTF-GTMO/JTF-BRAVO Network Deprecation on SCHQ Network",
        "clin_id": "002BA",
        "year": 0,
        "labor_categories":
        [
            {
                "labor_id": ObjectId("5995c8b60fd4991064e1567a"),
                "labor_cat_id": "101G",
                "labor_category": "Configuration Management Specialist (Senior)",
                "duty_title": "Configuration Management Specialist (Senior)",
                "labor_rate": 5464,
                "proposed_hours": 1920,
                "required_hours": 1920
            },
            {
                "labor_id": ObjectId("57d2a9376d213c0106131026"),
                "labor_cat_id": "101G",
                "labor_category": "Configuration Management Specialist (Senior)",
                "duty_title": "Configuration Management Specialist (Senior)",
                "labor_rate": 5464,
                "proposed_hours": 1920,
                "required_hours": 1920
            }
        ]
    }, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into GSArates collection.");
        callback();
    });
};

module.exports.insertUserTime = function (db, callback) {
    db.collection('usertime').insertOne({
        "employee_id": ObjectId("57d2a9376d213c0106131026"),
        "date_range": {
            "labor_id": ObjectId("57d2a9376d213c0106131026"),
            "labor_cat_id": "104G",
            "start": Date("2016-09-09T14:12:24.896Z"),
            "end": Date("2016-09-09T14:12:24.896Z"),
            "hours_worked": 40
        }
    }, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into usertime collection.");
        callback();
    });
};
