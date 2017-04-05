module.exports = function (gulp,options,plugins) {
    gulp.task('del', function (cb) {
        plugins.del([
            // 'dist/report.csv',
            // 这里我们使用一个通配模式来匹配 `mobile` 文件夹中的所有东西
            'template/default/css/*','template/default/fonts/*','template/default/image/*','template/default/js/*'
            // 我们不希望删掉这个文件，所以我们取反这个匹配模式
            // '!dist/mobile/deploy.json'
        ], cb);
    });
};
