/**
 * @module ProcessDaemon
 * @author Rube
 * @date 15/11/24
 * @desc 以守护进程方式执行的脚本执行部
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonScript = require('../common/script');

var _commonScript2 = _interopRequireDefault(_commonScript);

var _commonApi = require('../common/Api');

var _commonApi2 = _interopRequireDefault(_commonApi);

function run(message) {
    var exChildProcess = message.exChildProcess;
    var processInfo = message.processInfo;
    var funcStr = exChildProcess.funcStr;
    var option = exChildProcess.option;
    var scriptName = exChildProcess.scriptName;
    var pid = exChildProcess.pid;

    var ScriptClass = require(__dirname + '/../scripts/' + scriptName)({ Script: _commonScript2['default'], Api: _commonApi2['default'] });

    var script = new ScriptClass({
        pid: pid
    });
    script.on_process_create();
    script.on_process_start();
    script.on_process_exec(funcStr, option);
    return script;
}

var processDaemon = function processDaemon() {
    process.on('message', function (m) {
        run(m);
    });
};

exports['default'] = processDaemon;
module.exports = exports['default'];