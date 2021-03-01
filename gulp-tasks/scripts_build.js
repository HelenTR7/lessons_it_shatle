'use strict';

module.exports = function (gulp, options, plugins) {

    return function (cb) {

        gulp.src(options.path.src.js + 'app.js')
                .pipe(plugins.babel({
                    presets: ['@babel/env']
                }))
                .pipe(plugins.jsmin())
                .pipe(plugins.rename({ suffix: '.min' }))
                .pipe(gulp.dest(options.path.build.js));

        cb();
    };
};


