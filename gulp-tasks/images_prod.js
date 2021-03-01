'use strict';

module.exports = function (gulp, options, plugins) {

    return function (cb) {
        gulp.src(options.path.src.images)
            .pipe(plugins.imagemin({
                progressive: true
            }))
            .pipe(gulp.dest(options.path.build.images));
        cb();
    };
};



