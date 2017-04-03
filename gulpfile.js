var gulp = require('gulp');
var options = {
  paths: {
    less:['./source/less/*.less'],
    cssmin:['./template/default/css/*.css'],
    del:['./template/default/css','./template/default/fonts','./template/default/image','./template/default/js'],
    imagemin:['./image/*.{jpg,png}']
  }
};
var plugins = {
  less:require('gulp-less'),
  cssmin:require('gulp-cssmin'),
  imagemin:require('gulp-imagemin'),
  sourcemaps:require('gulp-sourcemaps'),
  rename:require('gulp-rename'),
  del:require('del')
};
require('load-gulp-tasks')(gulp, options, plugins);
gulp.task('dist', ['copyres','compless','imagemin']);
