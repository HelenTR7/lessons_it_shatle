'use strict';

module.exports = function (gulp, options, plugins) {

    return function (cb) {
        plugins.browserSync.init({
            server: {
                baseDir: options.serverConfig.server.baseDir
            }
        });
        cb();
    };
};

