var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var del = require('del');
var exec = require('child_process').exec;

var rootdir = 'app';

var paths = {
    all: [rootdir+'/**/*', '!'+rootdir+'/angularcomponent/viewmodel/**/*'],
    viewmodel: [rootdir+'/angularcomponent/viewmodel/**/*'],
    service:[rootdir+'/angularcomponent/services/**/*',rootdir+'/angularcomponent/filters/**/*'],
    bower: ['bower_components/**/*'],
    dist: 'www',
}

gulp.task('clean', function(){
    del.sync(['./www/**']);
});


gulp.task('copyall', function (){
    gulp.src(paths.bower).pipe(gulp.dest(paths.dist+'/bower_components'));
    return gulp.src(paths.all).pipe(gulp.dest(paths.dist))
});

gulp.task('services', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.service)
        .pipe(concat('services.min.js'))
        .pipe(gulp.dest(paths.dist+'/angularcomponent/services'));
});

gulp.task('concatviewmodel', function(){
    return gulp.src(paths.viewmodel)
            .pipe(concat('services.min.js'))
            //.pipe(minify())
            //.pipe(uglify())
            .pipe(gulp.dest(paths.dist+'/angularcomponent/core'));
});

gulp.task('watch', function(){
    gulp.watch(paths.all,['copyall']);
    gulp.watch(paths.service,['services']);
    gulp.watch(paths.viewmodel,['concatviewmodel']);
});


gulp.task('server', function(){
    exec('node server.js', function(error,stdout,stderr){
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
        if (error !== null){
            console.log('exec error: ', error);
        }   
    });
});

gulp.task('default',['clean','copyall','watch','concatviewmodel','services','server']);


