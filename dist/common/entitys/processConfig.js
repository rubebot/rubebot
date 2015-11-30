/**
 * @module ProcessConfig
 * @author Rube
 * @date 15/11/24
 * @desc process config
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ProcessConfig = (function () {
    function ProcessConfig(serviceType, receiveType) {
        _classCallCheck(this, ProcessConfig);

        this.serviceType = serviceType;
        this.receiveType = receiveType;
        return this;
    }

    _createClass(ProcessConfig, [{
        key: 'setServiceType',
        value: function setServiceType(serviceType) {

            this.serviceType = serviceType;
            return this;
        }
    }, {
        key: 'setReceiveType',
        value: function setReceiveType(receiveType) {

            this.receiveType = receiveType;
            return this;
        }
    }, {
        key: 'setRunType',
        value: function setRunType(runType) {

            this.runType = runType;
            return this;
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

var S_O_R_O = ProcessConfig.START_SERVICE_ONCE + '' + ProcessConfig.RECEIVE_ONCE;
var S_O_R_E = ProcessConfig.START_SERVICE_ONCE + '' + ProcessConfig.RECEIVE_EVERY;
var S_E_R_O = ProcessConfig.START_SERVICE_EVERY + '' + ProcessConfig.RECEIVE_ONCE;
var S_E_R_E = ProcessConfig.START_SERVICE_EVERY + '' + ProcessConfig.RECEIVE_EVERY;
ProcessConfig.SORO = S_O_R_O;
ProcessConfig.SORE = S_O_R_E;
ProcessConfig.SERO = S_E_R_O;
ProcessConfig.SERE = S_E_R_E;

exports['default'] = ProcessConfig;
module.exports = exports['default'];