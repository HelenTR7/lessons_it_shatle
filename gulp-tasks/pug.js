'use strict';

module.exports = function (gulp, options, plugins) {

	return function (cb) {
		gulp.src(options.path.src.pug)
			.pipe(plugins.pug({
				pretty: true
			}))
			.pipe(gulp.dest(options.path.build.html))
			.on('end', plugins.browserSync.reload);
		cb();
	};
};
