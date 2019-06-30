var gulp = require('gulp'),
    /** Utils */
    requireDir = require('require-dir'),
    gulpAutoTask = require('gulp-auto-task'),
    /** Config */
    paths = require('./package.json').paths;

/** Import Main Tasks */
// Require modules so they can be called as functions
var utils = requireDir('gulp-tasks'); // ex. utils.buildJekyll();
// Automagically set up tasks
gulpAutoTask('{*,**/*}.js', {
    base: paths.tasks,
    gulp: gulp
});

/** Helper Tasks */
// gulp.task('build', function (callback) {
//     return utils.buildJekyll(callback, 'serve');
// });

// gulp.task('build:prod', function (callback) {
//     return utils.buildJekyll(callback, 'prod');
// });

exports.build_assets = gulp.parallel('buildCss', 'buildJs', 'optimizeImg');