function defaultTask(cb) {
    'use strict';

    const gulp = require('gulp');
    const sass = require('gulp-sass');

    sass.compiler = require('node-sass');

    gulp.task('sass', function () {
        return gulp.src('./sass/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
    });

    gulp.task('scssToCss', function () {
        return gulp
            .src("*.scss")
            .pipe(sass())
            .pipe(gulp.dest('./styles.css'))
    });

    gulp.task('sass:watch', function () {
        gulp.watch('./sass/**/*.scss', ['sass']);
        gulp.watch(".scss", gulp.series("scssToCss"));
    });
    cb();
}

exports.default = defaultTask
