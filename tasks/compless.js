module.exports = function (gulp,options,plugins) {
    gulp.task('compless', function () {
        return gulp.src(options.paths.less)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.less())
            .pipe(plugins.cssmin())
            .pipe(plugins.rename({suffix:'.min'}))
            .pipe(plugins.sourcemaps.write('./',{addComment:false}))
            .pipe(gulp.dest('template/default/css'));
    });
};
