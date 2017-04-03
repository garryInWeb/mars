module.exports = function (gulp,options,plugins) {
    gulp.task('imagemin', function () {
        return gulp.src(options.paths.imagemin)
            .pipe(plugins.imagemin())
            .pipe(gulp.dest('template/default/image/'));
    });
};
