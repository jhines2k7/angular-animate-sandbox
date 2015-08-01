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
    gulp.src(['css/*.css', 'js/*.js', 'index.html'])
        .pipe(watch(['css/*.css', 'js/*.js', 'index.html']))
        .pipe(connect.reload());
});

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['less', 'webserver', 'livereload', 'watch']);