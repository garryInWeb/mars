module.exports = function (gulp,options,plugins) {
    const LessAutoprefix = plugins.autoprofixer;
    const autoprefixer = new LessAutoprefix({ browsers: ['last 3 version']});
    const cache = plugins.cache;

    gulp.task('compless', function () {
        return gulp.src(options.paths.less)
            .pipe(cache('complessing'))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.less({
                plugins: [autoprefixer]
            }))
            .pipe(plugins.cssmin())
            .pipe(plugins.rename({suffix:'.min'}))
            .pipe(plugins.sourcemaps.write('./',{addComment:false}))
            .pipe(gulp.dest('template/default/css'))
    });
};
