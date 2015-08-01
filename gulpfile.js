var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});

gulp.task('default', ['startExpress', 'startLivereload', 'notifyLiveReload']);