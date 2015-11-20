/**
 * @module createServer
 * @author Rube
 * @date 15/11/19
 * @desc create net Server (System)
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _commonClientApi = require('../common/clientApi');

var _commonClientApi2 = _interopRequireDefault(_commonClientApi);

var config = require('../datas/config');

module.exports = function (next) {

    var server = _net2['default'].createServer(function (c) {

        c.on('data', function (chunk) {
            (0, _commonClientApi2['default'])(chunk.toString());
        });
    });

    server.listen(config.systemPort);
    next();
};