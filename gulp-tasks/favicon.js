'use strict';

module.exports = function (gulp, options, plugins) {

    return function (cb) {
        gulp.src(options.path.src.favicon)
            .pipe(gulp.dest(options.path.build.favicon));
        cb();
    };
};



