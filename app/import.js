const config = require('../config/config');
const mongojs = require('mongojs');
const assert = require('assert');
const fs = require('fs');
const async = require('async');

const dburl = config.db;
const db = mongojs(dburl);
const movies = db.collection('movies');


async.series([
	function(callback) {
		movies.drop(function(err, result) {
			if(err)
				console.log(err);
			else {
				console.log(result);
				console.log('movies collection dropped');
			}
		});
		callback();
	},
	function(callback) {
		fs.readFile('config/seed.json', 'utf8', function(err, contents) {
			if(err) console.log(err);
			movies.insert(JSON.parse(contents).data, function(err, docs) {
				if(err)
					console.log(err);
				else {
					console.log('insertion of seed data success');
				}
				callback();
			})
		});		
	},
	function(callback) {
		movies.find(function(err, docs) {
			console.log('movies collection contains the following documents now:');
			console.log(docs);
		});
	}
]);

console.log('running import file');
console.log('db url: ' + dburl);
