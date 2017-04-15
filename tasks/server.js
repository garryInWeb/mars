module.exports = function (gulp,options,plugins) {
    const browserSync = plugins.browserSync;
    const reload = browserSync.reload;
    const baseDir = options.paths.baseDir;
    const lessDir = options.paths.less;

    gulp.task('server', ['compless'], function () {
        browserSync.init({

            //文件模式
            server: {
               baseDir: baseDir
            }

            //本地web服务器
            // proxy: 'localhost:7888'
        });

        gulp.watch( lessDir , ['compless']);
        gulp.watch(baseDir + 'css/**/*.css').on('change', reload);
        gulp.watch( baseDir + '/*.html').on('change', reload);
    });
};