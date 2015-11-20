/**
 * @module execCommand
 * @author Rube
 * @date 15/11/19
 * @desc exec Command.main
 */

'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _datasOutputConfig = require('../datas/outputConfig');

var output = _interopRequireWildcard(_datasOutputConfig);

var config = require('../datas/config');

module.exports = function (command, next) {

    var main = config.commandShort[command.main] || command.main;
    var isExists = _fs2['default'].existsSync(__dirname + '/../commands/' + main + '.js');

    if (isExists) {
        var e = require('../commands/' + main)();
        if (e.async) {
            e.exec(command, next);
        } else {
            e.exec(command);
            next();
        }
    } else {
        output.commandError(main);
    }
};