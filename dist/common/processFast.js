/**
 * @module ProcessFast
 * @author Rube
 * @date 15/11/25
 * @desc 快速执行模式的执行部
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonScript = require('../common/script');

var _commonScript2 = _interopRequireDefault(_commonScript);

module.exports = function (message) {
    var exChildProcess = message.exChildProcess;
    var processInfo = message.processInfo;
    var funcStr = exChildProcess.funcStr;
    var option = exChildProcess.option;
    var scriptName = exChildProcess.scriptName;
    var pid = exChildProcess.pid;

    var ScriptClass = require(__dirname + '/../scripts/' + scriptName)({ Script: _commonScript2['default'] });

    var script = new ScriptClass({
        pid: pid
    });

    script.on_process_create();
    script.on_process_start();
    script.on_process_exec(funcStr, option);
};