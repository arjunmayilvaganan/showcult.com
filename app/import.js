const config = require('../config/config');
const mongojs = require('mongojs');
const fs = require('fs');
const async = require('async');

const dburl = config.db;
const db = mongojs(dburl);
const movies = db.collection('movies');

async.series([
  function (callback) {
    movies.drop(function (err, result) {
      if (err) {
        console.log(err);
        process.exit(1);
      } else {
        console.log(result);
        console.log('movies collection dropped');
        callback();
      }
    });
  },
  function (callback) {
    console.log('db url: ' + dburl);
    fs.readFile('config/seed.json', 'utf8', function (err, contents) {
      if (err) {
        console.log(err);
        process.exit(1);
      } else {
        movies.insert(JSON.parse(contents).data, function (err, docs) {
          if (err)
            console.log(err);
          else {
            console.log('insertion of seed data success');
          }
          callback();
        });
      }
    });
  },
  function (callback) {
    movies.find(function (err, docs) {
      if (err) {
        console.log(err);
        process.exit(1);
      } else {
        console.log('movies collection contains the following documents now:');
        console.log(docs);
        callback();
      }
    });
  }
], function () {
  console.log('seeding exiting...');
  db.close();
  process.exit(0);
});
