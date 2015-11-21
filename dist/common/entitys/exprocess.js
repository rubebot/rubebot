/**
 * @module ExProcess
 * @author Rube
 * @date 15/11/19
 * @desc process exchange info format
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ExProcess = (function () {
    function ExProcess(pid, method, content) {
        _classCallCheck(this, ExProcess);

        this.pid = pid;
        this.method = method;
        this.content = content;
    }

    _createClass(ExProcess, [{
        key: 'toString',
        value: function toString() {
            return this.pid + ':' + this.method + ':' + this.content;
        }
    }], [{
        key: 'parse',
        value: function parse(processText) {

            var arr = processText.split(':');
            return {
                pid: arr[0],
                method: arr[1],
                content: arr[2]
            };
        }
    }]);

    return ExProcess;
})();

exports['default'] = ExProcess;
module.exports = exports['default'];