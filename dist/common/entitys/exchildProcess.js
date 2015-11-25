/**
 * @module ExChildProcess
 * @author Rube
 * @date 15/11/25
 * @desc 与 fork 的进程进行交互
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExChildProcess = (function () {
    function ExChildProcess() {
        _classCallCheck(this, ExChildProcess);

        this.funcStr = null;
        this.scriptName = null;
        this.option = null;
        this.pid = null;
    }

    _createClass(ExChildProcess, [{
        key: "setPid",
        value: function setPid(pid) {
            this.pid = pid;
        }
    }, {
        key: "setFuncStr",
        value: function setFuncStr(funcStr) {

            this.funcStr = funcStr;
        }
    }, {
        key: "setScriptName",
        value: function setScriptName(scriptName) {

            this.scriptName = scriptName;
        }
    }, {
        key: "setOption",
        value: function setOption(option) {

            this.option = option;
        }
    }]);

    return ExChildProcess;
})();

exports["default"] = ExChildProcess;
module.exports = exports["default"];