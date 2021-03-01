const gulp =  require('gulp'),
	options = require('./options.js'),
	plugins = require('gulp-load-plugins')();

plugins.browserSync = require('browser-sync');
plugins.path = require('path');
plugins.fs = require('fs');

gulp.task('pug', require('./gulp-tasks/pug')(gulp, options, plugins));
gulp.task('scss:dev', require('./gulp-tasks/scss_dev')(gulp, options, plugins));
gulp.task('scss:build', require('./gulp-tasks/scss_build')(gulp, options, plugins));
gulp.task('scripts:dev', require('./gulp-tasks/scripts_dev')(gulp, options, plugins));
gulp.task('scripts:build', require('./gulp-tasks/scripts_build')(gulp, options, plugins));
gulp.task('vendors:js', require('./gulp-tasks/vendors_js')(gulp, options, plugins));
gulp.task('vendors:js_build', require('./gulp-tasks/vendors_js_build')(gulp, options, plugins));
gulp.task('images:dev', require('./gulp-tasks/images_dev')(gulp, options, plugins));
gulp.task('images:prod', require('./gulp-tasks/images_prod')(gulp, options, plugins));
gulp.task('svg', require('./gulp-tasks/svg')(gulp, options, plugins));
gulp.task('favicon', require('./gulp-tasks/favicon')(gulp, options, plugins));

gulp.task('watch', require('./gulp-tasks/watch')(gulp, options, plugins));
gulp.task('serve', require('./gulp-tasks/serve')(gulp, options, plugins));


//сборка dev
gulp.task('default',
	gulp.series(
		gulp.parallel(
			'pug',
			'scss:dev',
			'scripts:dev',
			'images:dev',
			'svg',
			'vendors:js',
			'favicon',
		),
		gulp.parallel(
			'watch',
			'serve'
		),
));

//сборка build
gulp.task('build',
	gulp.series(
		gulp.parallel(
			'pug',
			'scss:build',
			'scripts:build',
			'images:prod',
			'svg',
			'vendors:js',
			//'vendors:js_build',
			'favicon',
		),
	));
