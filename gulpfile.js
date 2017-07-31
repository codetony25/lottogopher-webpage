var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bs = require('browser-sync').create();

var autoprefixerOptions = {
  browsers: ['last 4 versions', '> 5%', 'Firefox ESR']
};

gulp.task('browser-sync', ['sass'], function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(bs.reload({stream: true}));
});


// gulp.task('prod', function () {
//   return gulp
//     .src('css/*.scss')
//     .pipe(sass({ outputStyle: 'expanded' }))
//     .pipe(autoprefixer(autoprefixerOptions))
//     .pipe(gulp.dest('./dist/css'));
// });
//
// gulp.task('default', ['prod']);

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch("css/*.scss", ['sass']);
  gulp.watch("*.html").on('change', bs.reload);
});

gulp.task('default', ['watch']);
