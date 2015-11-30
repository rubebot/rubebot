/**
 * @module outputConfig
 * @author Rube
 * @date 15/11/17
 * @desc process.stdout.write's style
 */

'use strict';

var clc = require('cli-color');

var out = process.stdout;

module.exports = {
    robotName: function robotName(text) {
        return out.write(clc.bold.green(text));
    },
    serverTypeError: function serverTypeError(type) {
        return console.log(clc.bold.red('No server type \'' + type + '\' !'));
    },
    commandError: function commandError(command) {
        return console.log(clc.bold.red('No command \'' + command + '\' !'));
    },
    scriptSameWarn: function scriptSameWarn(scriptName) {
        return console.log(clc.bold.yellow('Have the same name script \'' + scriptName + '\''));
    },
    scriptNotFound: function scriptNotFound(scriptName) {
        return console.log(clc.bold.red('script \'' + scriptName + '\' not found !'));
    },
    funcStrNotFound: function funcStrNotFound(funcStr) {
        return console.log(clc.bold.red('can\'t run \'' + funcStr + '\' !'));
    },
    sayOutput: function sayOutput(tip) {
        return console.log(clc.bold.cyan(tip));
    },
    log: (function (_log) {
        function log(_x, _x2) {
            return _log.apply(this, arguments);
        }

        log.toString = function () {
            return _log.toString();
        };

        return log;
    })(function (color, text) {
        return console.log(clc.bold[color](log));
    }),
    processConfigError: function processConfigError(text) {
        return console.log(clc.bold.red('processConfig Error: ' + (text || '')));
    },
    processConfigTypeError: function processConfigTypeError() {
        return console.log(clc.bold.red('启动方式错误!'));
    }
};