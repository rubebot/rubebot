/**
 * @module Order
 * @author Rube
 * @date 15/11/20
 * @desc send the fixed format command
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _datasOutputConfig = require('../datas/outputConfig');

var output = _interopRequireWildcard(_datasOutputConfig);

var _commonBucketApi = require('../common/bucketApi');

var bucketApi = _interopRequireWildcard(_commonBucketApi);

var _commonEntitysCommandExec = require('../common/entitys/commandExec');

var _commonEntitysCommandExec2 = _interopRequireDefault(_commonEntitysCommandExec);

var _commonEntitysCommand = require('../common/entitys/command');

var _commonEntitysCommand2 = _interopRequireDefault(_commonEntitysCommand);

var _commonEntitysProcessConfig = require('../common/entitys/processConfig');

var _commonEntitysProcessConfig2 = _interopRequireDefault(_commonEntitysProcessConfig);

var _commonEntitysProcessInfo = require('../common/entitys/processInfo');

var _commonEntitysProcessInfo2 = _interopRequireDefault(_commonEntitysProcessInfo);

var _commonEntitysExchildProcess = require('../common/entitys/exchildProcess');

var _commonEntitysExchildProcess2 = _interopRequireDefault(_commonEntitysExchildProcess);

var _exec = [];
_exec[_commonEntitysProcessConfig2['default'].SERE] = require('../common/exec/SERE');
_exec[_commonEntitysProcessConfig2['default'].SORO] = require('../common/exec/SORO');
_exec[_commonEntitysProcessConfig2['default'].SERO] = require('../common/exec/SERO');
_exec[_commonEntitysProcessConfig2['default'].SORE] = require('../common/exec/SORE');

function splitChunk(chunk) {

    var cxt = chunk.split(' ').filter(function (item) {
        return item != '';
    });

    return new _commonEntitysCommand2['default'](cxt);
}

var Order = (function (_CommandExec) {
    _inherits(Order, _CommandExec);

    function Order() {
        _classCallCheck(this, Order);

        _get(Object.getPrototypeOf(Order.prototype), 'constructor', this).call(this);
    }

    _createClass(Order, [{
        key: 'exec',
        value: function exec(command) {

            function findScript(arr, name) {
                var scripts = [];
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].name === name) {
                        scripts.push(arr[i]);
                    }
                }
                return scripts;
            }

            var scripts = this.getScriptModules();
            var execScriptName = command.options['e'];
            var execScript = findScript(scripts, execScriptName);

            if (execScriptName && execScript.length > 0) {
                if (execScript.length > 1) {
                    return output.scriptSameWarn(execScriptName);
                }

                var funcCommand = splitChunk(command.nativeContent);
                var funcStr = execScript[0].emitTable.commandEmitTable[funcCommand.main];
                var processConfig = execScript[0].script.get_processConfig();

                if (funcStr) {

                    var exChildProcess = new _commonEntitysExchildProcess2['default']();
                    var processInfo = new _commonEntitysProcessInfo2['default']();
                    processInfo.setProcessConfig(processConfig);
                    exChildProcess.setFuncStr(funcStr);
                    exChildProcess.setScriptName(execScriptName);
                    exChildProcess.setOption(funcCommand.options);

                    var SERVICE_RECEIVE_STR = processConfig.serviceType + '' + processConfig.receiveType;

                    if (_exec[SERVICE_RECEIVE_STR]) {
                        return _exec[SERVICE_RECEIVE_STR]({
                            processConfig: processConfig,
                            exChildProcess: exChildProcess,
                            processInfo: processInfo
                        });
                    } else {
                        return output.processConfigError();
                    }
                }
                output.funcStrNotFound(funcCommand.main);
            } else {
                output.scriptNotFound(execScriptName);
            }
        }
    }]);

    return Order;
})(_commonEntitysCommandExec2['default']);

module.exports = function () {
    return new Order();
};