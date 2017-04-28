var gulp = require('gulp');
var scssPlugin = require('gulp-sass');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');

var autoprefixerOptions = {
  browsers: ['last 4 versions', '> 5%', 'Firefox ESR']
};

gulp.task('myStyles', function () {
  gulp.src('css/*.scss')
    .pipe(scssPlugin({ outputStyle: 'expanded' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('prod', function () {
  return gulp
    .src('css/*.scss')
    .pipe(scssPlugin({ outputStyle: 'expanded' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./dist'));
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watchMyStyles', function() {
  gulp.watch('css/*.scss', ['myStyles']);
});

gulp.task('default', ['watchMyStyles', 'connect']);

// uncomment to build prod version of css
// gulp.task('default', ['prod']);
