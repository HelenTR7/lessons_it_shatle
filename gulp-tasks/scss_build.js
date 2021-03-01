'use strict';

module.exports = function (gulp, options, plugins) {

    return function (cb) {
        gulp.src([options.path.src.scss + 'app.scss',
            options.path.src.scss+'components/*.scss'
        ])
            .pipe(plugins.sass().on('error', plugins.sass.logError))//преобразование scss к css
            .pipe(plugins.concat('app.css'))
            .pipe(plugins.csso())
            .pipe(plugins.rename({ suffix: '.min' }))
            .pipe(gulp.dest(options.path.build.css));
        cb();
    };
};


