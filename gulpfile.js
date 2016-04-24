var gulp = require('gulp'),
    babel = require('gulp-babel'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename'),
    browserify = require('browserify');

gulp.task('copylibs', function() {
  gulp.src('./node_modules/three/three.js')
    .pipe(gulp.dest('lib/'));
});

gulp.task('browserify', ['es6', 'copylibs'], function() {
  var bundleStream = browserify({entries: 'main.js', debug: true, basedir: './build'}).bundle();

  return bundleStream
    .pipe(source('build/main.js'))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task('es6', function() {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("build"));
});


gulp.task('default', ['browserify'], function(done) {
  http.createServer(
    st({ index: 'index.html', cache: false, path: __dirname })
  ).listen(8080, done);
  console.log('Now listening: http://localhost:8080 ....');
  livereload.listen();
  gulp.watch('src/*', ['browserify']);
});
