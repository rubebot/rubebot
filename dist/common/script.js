/**
 * @module Script
 * @author Rube
 * @date 15/11/19
 * @desc script's method
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _commonEntitysEmitTable = require('../common/entitys/emitTable');

var _commonEntitysEmitTable2 = _interopRequireDefault(_commonEntitysEmitTable);

var _commonEntitysWords = require('../common/entitys/words');

var _commonEntitysWords2 = _interopRequireDefault(_commonEntitysWords);

var _commonEntitysProcessConfig = require('../common/entitys/processConfig');

var _commonEntitysProcessConfig2 = _interopRequireDefault(_commonEntitysProcessConfig);

var Script = (function () {
    function Script(cxt) {
        _classCallCheck(this, Script);

        this.cxt = cxt;
    }

    _createClass(Script, [{
        key: 'on_process_create',
        value: function on_process_create() {}
    }, {
        key: 'on_process_start',
        value: function on_process_start() {}
    }, {
        key: 'on_process_resume',
        value: function on_process_resume() {}
    }, {
        key: 'on_process_pause',
        value: function on_process_pause() {}
    }, {
        key: 'on_process_stop',
        value: function on_process_stop() {}
    }, {
        key: 'on_process_destroy',
        value: function on_process_destroy() {
            process.exit();
        }
    }, {
        key: 'on_process_exec',
        value: function on_process_exec(funcStr, params) {
            return this[funcStr](params);
        }
    }], [{
        key: 'get_processConfig',
        value: function get_processConfig() {

            var config = new _commonEntitysProcessConfig2['default']();
            config.setServiceType(_commonEntitysProcessConfig2['default'].START_SERVICE_EVERY);
            config.setReceiveType(_commonEntitysProcessConfig2['default'].RECEIVE_ONCE);
            config.setRunType(_commonEntitysProcessConfig2['default'].RUN_FAST);
            return config;
        }
    }, {
        key: 'get_emitTable',
        value: function get_emitTable() {

            var emitTable = new _commonEntitysEmitTable2['default']();
            return emitTable;
        }
    }, {
        key: 'get_description',
        value: function get_description() {
            return 'no description';
        }
    }, {
        key: 'get_ask',
        value: function get_ask() {
            return 'no ask';
        }
    }, {
        key: 'get_help',
        value: function get_help() {
            return 'no help';
        }
    }]);

    return Script;
})();

Script.ProcessConfig = _commonEntitysProcessConfig2['default'];
Script.EmitTable = _commonEntitysEmitTable2['default'];
Script.Words = _commonEntitysWords2['default'];

exports['default'] = Script;
module.exports = exports['default'];