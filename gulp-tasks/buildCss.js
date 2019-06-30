var gulp = require('gulp'),
    /** Utilities */
    rename = require('gulp-rename'),
    /** CSS */
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    /** Config */
    paths = require("../package.json").paths;

/** CSS Build */
module.exports = function buildCss() {

    return gulp.src(paths.css.src + 'blogwin.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(paths.css.dest));
};