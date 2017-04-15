module.exports = function (gulp) {
    gulp.task('copyres', function () {
        return gulp.src(['./assets/**/*.{html,css,map,otf,eot,svg,ttf,woff,jpg,png,js}', './source/**/*.html'])
            .pipe(gulp.dest('template/default/'));
    });
};
