var imagemin = require('gulp-imagemin');

gulp.task('otimizar-img', function(){
	return gulp.src('app/assets/img/*.png')
		   .pipe(imagemin())
		   .pipe(gulp.dest('app/assets/img'))
});