/**
 * @module Process
 * @author Rube
 * @date 15/11/24
 * @desc 脚本执行部
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonScript = require('../common/script');

var _commonScript2 = _interopRequireDefault(_commonScript);

function run(message) {
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
    script[funcStr](option);
}

process.on('message', function (m) {
    run(m);
});