var gulp = require('gulp'),
  connect = require('gulp-connect'),
  historyApiFallback = require('connect-history-api-fallback');

  gulp.task('server', function(){
  connect.server({
    root: './',
    port: 3000,
    livereload : true,
    middleware: function(connect, opt){
      return [historyApiFallback({})];
    }
  });
});

gulp.task('html',function(){
  gulp.src('./*.html')
  .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(['./*.html'], ['html']);
});
gulp.task('default', ['server','watch']);
