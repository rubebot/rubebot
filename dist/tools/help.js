/**
 * @module Help
 * @author Rube
 * @date 15/11/26
 * @desc help create tool
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var clc = require('cli-color');

var Help = (function () {
    function Help() {
        _classCallCheck(this, Help);

        this.help = [];
    }

    _createClass(Help, [{
        key: 'set',
        value: function set(params, desc) {
            this.help.push({
                params: params,
                desc: desc
            });
        }
    }, {
        key: 'toString',
        value: function toString() {
            var _this = this;

            var tip = clc.bold.yellow('参数:\n');
            this.help.forEach(function (h, index) {
                tip += '     ' + clc.bold.cyan(h.params) + '          ' + clc.bold.green(h.desc);
                if (index != _this.help.length - 1) {
                    tip += '\n';
                }
            });
            return tip;
        }
    }]);

    return Help;
})();

exports['default'] = Help;
module.exports = exports['default'];