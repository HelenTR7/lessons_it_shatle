'use strict';

module.exports = function (gulp, options, plugins) {

    return function (cb) {

        gulp.src(options.path.src.js + 'app.js')
                .pipe(plugins.babel({
                    presets: ['@babel/env']
                }))
                .pipe(gulp.dest(options.path.build.js))
                .pipe(plugins.browserSync.reload({
                    stream: true
                }));

        cb();
    };
};


