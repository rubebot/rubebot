/**
 * @module Command
 * @author Rube
 * @date 15/11/18
 * @desc Command format
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Command = function Command(cxt) {
    _classCallCheck(this, Command);

    var length = cxt.length;
    this.main = cxt[0];
    this.options = [];

    for (var i = 1; i < length; i++) {
        var obj = {};
        if (cxt[i].indexOf('--') == 0) {

            obj[cxt[i].substr(2)] = true;
            this.options.push(obj);
        } else if (cxt[i].indexOf('-') == 0) {

            obj[cxt[i].substr(1)] = cxt[i + 1];
            this.options.push(obj);
            i++;
        } else {
            break;
        }
    }

    this.token = this.options['token'] || 'local'; //TODO:用户标识的通用性研究,特别是在做服务端的时候
    this.content = cxt.slice(i, length).join(' ');
};

exports['default'] = Command;
module.exports = exports['default'];