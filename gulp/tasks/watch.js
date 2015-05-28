var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch('./Scripts/Src/**/*.js', ['js:babelify']);
});