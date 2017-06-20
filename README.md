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
    .pipe(px2rpx({
        screenWidth: 750, // 设计稿屏幕, 默认750
        wxappScreenWidth: 750, // 微信小程序屏幕, 默认750
        remPrecision: 6 // 小数精度, 默认6
    }))
    .pipe(gulp.dest('./wxappCss'))
});
```
