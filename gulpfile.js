/**
 * @author Rube
 * @date 15/11/18
 */

var gulp = require('gulp');
var babel = require('gulp-babel');
var changed = require('gulp-changed');

var filter = ['servers', 'commands', 'common', 'datas', 'middlewares', 'scripts'];
var jsFilter = filter.map(function (item) {
    return item + '/**/*.js';
});

var jsonFilter = filter.map(function (item) {
    return item + '/**/*.json';
});

gulp.task('babel', function () {

    gulp.src('bin/rubebot', {base: './'})
        .pipe(gulp.dest('dist'));

    gulp.src(jsonFilter, {base: './'})
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist'));

    gulp.src(['index.js', 'bucket.js'])
        .pipe(changed('dist'))
        .pipe(babel())
        .pipe(gulp.dest('dist'));

    return gulp.src(jsFilter, {base: './'})
        .pipe(changed('dist'))
        .pipe(babel())
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['babel'], function () {

    var watcher = gulp.watch(jsFilter.concat(jsonFilter).concat(['index.js', 'bucket.js', 'bin/rubebot']
    ), ['babel']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
