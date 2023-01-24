'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('src/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('src/assets/scss/**/*.scss', buildStyles);
  gulp.watch('src/components/CardFrontSide/*.scss', buildStyles);
  gulp.watch('src/components/CardBackSide/*.scss', buildStyles);
  gulp.watch('src/components/CardForm/*.scss', buildStyles);
  gulp.watch('src/components/ThankYou/*.scss', buildStyles);
};