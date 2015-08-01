'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    less = require('gulp-less');

gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('livereload', function() {
    gulp.src(['.tmp/styles/*.css', 'js/*.js'])
        .pipe(watch(['.tmp/styles/*.css', 'js/*.js']))
        .pipe(connect.reload());
});

gulp.task('reload', function() {
    connect.reload();
});

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
    //gulp.watch('scripts/*.coffee', ['coffee']);
});

gulp.task('default', ['less', 'webserver', 'livereload', 'watch']);