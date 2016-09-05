var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var exec = require('child_process').exec;


gulp.task('default', ['webpack', 'node-server']);

gulp.task('webpack', function(callback) {
    webpack({
	    entry: './main.js',
	    output: { path: './', filename: 'bundle.js' },
	    devServer:{
	      inline: true,
	      port: 8080
	    },
	    module: {
	      loaders: [
	        {
	          test: /\.jsx?$/,
	          loader: 'babel',
	          exclude: /node_modules/,
	          query: {
	            presets: ['es2015', 'react']
	          }
	        },
	        {
	              test: /\.css$/,
	              loader: "style-loader!css-loader"
	        },
	        {
	          test: /\.png$/,
	          loader: "url-loader?limit=100000"
	        },
	        {
	          test: /\.jpg$/,
	          loader: "file-loader"
	        },
	        {
	          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
	          loader: 'url?limit=10000&mimetype=application/font-woff'
	        },
	        {
	          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
	          loader: 'url?limit=10000&mimetype=application/octet-stream'
	        },
	        {
	          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
	          loader: 'file'
	        },
	        {
	          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	          loader: 'url?limit=10000&mimetype=image/svg+xml'
	        }
	      ]
	    }
    }, function(err, stats) {
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