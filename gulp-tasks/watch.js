'use strict';

module.exports = function (gulp, options, plugins) {

    return function (cb) {

        gulp.watch(options.path.watch.pug, gulp.series('pug'));
        gulp.watch(options.path.watch.scss, gulp.series('scss:dev'));
        gulp.watch(options.path.watch.js, gulp.series('scripts:dev'));
        gulp.watch(options.path.watch.vendors_js, gulp.series('vendors:js'));
        gulp.watch(options.path.watch.images, gulp.series('images:dev'));
        gulp.watch(options.path.watch.svg, gulp.series('svg'));
        gulp.watch(options.path.watch.favicon, gulp.series('favicon'));

        cb();
    };
};



