var async = require('async');
var gulp = require('gulp');
var lodash = require('lodash');

var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var rename = require("gulp-rename");

var sass = require('gulp-sass');


/*
 *  STYLING
 *
 */
gulp.task('style', function () {
  return gulp.src('./dev/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./dev/assets/scss/**/*.scss', ['style']);
});



/*
 * ICON FONT
 *
 */
gulp.task('Iconfont', function(done){
  var iconStream = gulp.src(['./dev/assets/icons/*.svg'])
        .pipe(iconfont({ fontName: 'pnfont' }));

  async.parallel([
    function handleGlyphs (cb) {
      iconStream.on('glyphs', function(glyphs, options) {
        gulp.src('./dev/assets/templates/_icons.txt')
          .pipe(consolidate('lodash', {
            glyphs: glyphs,
            fontName: 'pnfont',
            fontPath: '../fonts/',
            className: 'if'
          }))
          .pipe(rename("atoms/_icons.scss"))
          .pipe(gulp.dest('./dev/assets/scss/'))
          .on('finish', cb);
      });
    },
    function handleFonts (cb) {
      iconStream
        .pipe(gulp.dest('./assets/fonts/'))
        .on('finish', cb);
    }
  ], done);
});



gulp.task('default', ['Iconfont', 'style'], function() {
  // Run some shizzle in here when the time is right!
});