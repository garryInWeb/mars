var path = require('path');

module.exports = function (gulp,options,plugins) {

    const LessAutoprefix = plugins.autoprofixer;
    const autoprefixer = new LessAutoprefix({ browsers: ['last 3 version']});
    const cache = plugins.cache;
    const baseDir = options.paths.baseDir[0];

    gulp.task('compless', function () {
        return gulp.src(['./source/less/**/*.less', '!source/less/bootstrap/**/*.less', '!source/less/font-awesome/**/*.less'])
            .pipe(cache('complessing'))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.less({
                plugins: [autoprefixer]
            }))
            .pipe(plugins.cssmin())
            .pipe(plugins.rename({suffix:'.min'}))
            .pipe(plugins.sourcemaps.write('./',{addComment:false}))
            .pipe(gulp.dest(baseDir + 'css'))
    });
};
