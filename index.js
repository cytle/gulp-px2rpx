'use strict';

var util = require('gulp-util');
var PluginError = util.PluginError;
var through = require('through2');
var extend = require('extend');

var PLUGIN_NAME = 'gulp-px2rpx';

var defaultConfig = {
    screenWidth: 640, // 设计稿屏幕
    wxappScreenWidth: 750 // 微信小程序屏幕
};
var reg = /([\d\.])px/g;
function gulpPx2Rpx (options) {
    options = extend({}, defaultConfig, options);
    var ratio = options.wxappScreenWidth / options.screenWidth;
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }

        try {
            file.contents = new Buffer(file.contents.toString().replace(reg, function (m, p1) {
                return p1 * ratio + 'rpx';
            }));
        } catch (err) {
            this.emit('error', new PluginError(PLUGIN_NAME, err));
        }

        this.push(file);

        return cb();
    });
}

module.exports = gulpPx2Rpx;
