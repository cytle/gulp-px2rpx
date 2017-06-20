# gulp-px2rpx

微信小程序 px转换为rpx

## Installation

```shell
$ npm install --save-dev gulp-px2rpx
```

## Usage

```js
const gulp = require('gulp');
const px2rpx = require('gulp-px2rpx');

gulp.task('default', function () {
  gulp.src('./css/*.css')
    .pipe(px2rpx())
    .pipe(gulp.dest('./wxappCss'))
});
```
