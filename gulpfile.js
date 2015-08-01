'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    debug = require('gulp-debug');

gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('livereload', function() {
    gulp.src(['css/*.css', 'js/*.js', '*.html'])
        .pipe(watch(['css/*.css', 'js/*.js', '*.html']))
        .pipe(debug({title: 'watch'}))
        .pipe(connect.reload());
});

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(debug({title: 'less'}))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['less', 'webserver', 'livereload', 'watch']);