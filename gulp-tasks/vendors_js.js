'use strict';

module.exports = function (gulp, options, plugins) {
    return function (cb) {
        gulp.src([
            options.path.src.vendors_js+'jquery/jquery.min.js',
            options.path.src.vendors_js+'*.js',
        ])
            .pipe(plugins.concat('vendors.min.js'))
            .pipe(gulp.dest(options.path.build.vendors_js))
            .pipe(plugins.browserSync.reload({
                stream: true
            }));
        cb();
    };
};

