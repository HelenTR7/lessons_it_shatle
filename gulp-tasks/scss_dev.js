'use strict';

module.exports = function (gulp, options, plugins) {

    return function (cb) {
        gulp.src([options.path.src.scss + 'app.scss',
            options.path.src.scss+'components/*.scss'
        ])
            // .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass().on('error', plugins.sass.logError))//преобразование scss к css
            .pipe(plugins.concat('app.css'))
            //.pipe(plugins.sourcemaps.write())//добавление карты кода
            .pipe(gulp.dest(options.path.build.css))
            .pipe(plugins.browserSync.reload({
                stream: true
            }));
        cb();
    };
};


