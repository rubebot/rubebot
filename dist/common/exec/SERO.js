/**
 * @page
 * @module
 * @author Rube
 * @date 15/11/30
 * @desc
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entitysProcessConfig = require('../entitys/processConfig');

var _entitysProcessConfig2 = _interopRequireDefault(_entitysProcessConfig);

var _datasOutputConfig = require('../../datas/outputConfig');

var output = _interopRequireWildcard(_datasOutputConfig);

var _processFast = require('../processFast');

var _processFast2 = _interopRequireDefault(_processFast);

var _processDaemon = require('../processDaemon');

var _processDaemon2 = _interopRequireDefault(_processDaemon);

var _bucketApi = require('../bucketApi');

var bucketApi = _interopRequireWildcard(_bucketApi);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var SERO = function SERO(obj) {
    var processConfig = obj.processConfig;
    var exChildProcess = obj.exChildProcess;
    var processInfo = obj.processInfo;

    if (processConfig.runType == _entitysProcessConfig2['default'].RUN_FAST) {

        (0, _processFast2['default'])({
            processInfo: processInfo,
            exChildProcess: exChildProcess
        });
    } else if (processConfig.runType == _entitysProcessConfig2['default'].RUN_DAEMON) {

        var p = _child_process2['default'].fork(__dirname + '/../processDaemon.js');
        processInfo.setPid(p.pid);
        processInfo.incReceiveTime();
        var selfpid = bucketApi.addProcess(processInfo);
        exChildProcess.setPid(selfpid);
        p.send({
            exChildProcess: exChildProcess,
            processInfo: processInfo
        }); //TODO:最后需要结束
    } else {
            output.processConfigError();
        }
};

exports['default'] = SERO;
module.exports = exports['default'];