/**
 * @module ProcessInfo
 * @author Rube
 * @date 15/11/25
 * @desc memoryDb 里面存储的 process info
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProcessInfo = (function () {
    function ProcessInfo() {
        _classCallCheck(this, ProcessInfo);

        this.pid = null;
        this.processConfig = null;
        this.receiveTime = 0;
    }

    _createClass(ProcessInfo, [{
        key: "setPid",
        value: function setPid(pid) {
            this.pid = pid;
        }
    }, {
        key: "setProcessConfig",
        value: function setProcessConfig(processConfig) {
            this.processConfig = processConfig;
        }
    }, {
        key: "incReceiveTime",
        value: function incReceiveTime() {
            this.receiveTime++;
        }
    }]);

    return ProcessInfo;
})();

exports["default"] = ProcessInfo;
module.exports = exports["default"];