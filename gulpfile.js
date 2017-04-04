var gulp = require('gulp');
var options = {
  paths: {
    less:['./source/less/*.less'],
    cssmin:['./template/default/css/*.css'],
    del:['./template/default/css','./template/default/fonts','./template/default/image','./template/default/js'],
    imagemin:['./image/*.{jpg,png}'],
    baseDir: ['./template/default/']
  }
};
var plugins = {
  less:require('gulp-less'),
  cssmin:require('gulp-cssmin'),
  imagemin:require('gulp-imagemin'),
  sourcemaps:require('gulp-sourcemaps'),
  rename:require('gulp-rename'),
  del:require('del'),
  autoprofixer: require('less-plugin-autoprefix'),
  cache: require('gulp-cached'),
  browserSync: require('browser-sync').create()
};
require('load-gulp-tasks')(gulp, options, plugins);
gulp.task('dist', ['copyres','compless','imagemin']);

//开发任务
gulp.task('prod',['server']);
