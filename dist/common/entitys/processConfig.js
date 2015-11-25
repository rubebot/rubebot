/**
 * @module ProcessConfig
 * @author Rube
 * @date 15/11/24
 * @desc process config
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProcessConfig = (function () {
    function ProcessConfig(serviceType, receiveType) {
        _classCallCheck(this, ProcessConfig);

        this.serviceType = serviceType;
        this.receiveType = receiveType;
    }

    _createClass(ProcessConfig, [{
        key: "setServiceType",
        value: function setServiceType(serviceType) {

            this.serviceType = serviceType;
        }
    }, {
        key: "setReceiveType",
        value: function setReceiveType(receiveType) {

            this.receiveType = receiveType;
        }
    }, {
        key: "setRunType",
        value: function setRunType(runType) {

            this.runType = runType;
        }
    }]);

    return ProcessConfig;
})();

ProcessConfig.START_SERVICE_ONCE = 1;
ProcessConfig.START_SERVICE_EVERY = 2;
ProcessConfig.RECEIVE_ONCE = 3;
ProcessConfig.RECEIVE_EVERY = 4;
ProcessConfig.RUN_FAST = 5;
ProcessConfig.RUN_DAEMON = 6;

exports["default"] = ProcessConfig;
module.exports = exports["default"];