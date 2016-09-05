var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var exec = require('child_process').exec;


gulp.task('default', ['webpack', 'node-server']);

gulp.task('webpack', function(callback) {
	var myConfig = Object.create(webpackConfig);
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('node-server', ['webpack'], function(callback) {
    exec('node index.js', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
    });
});
