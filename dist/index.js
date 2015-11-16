/**
 * @author Rube
 * @date 15/11/16
 * @desc start script
 */

'use strict';

var net = require('net');
var Connect = require('./common/connect');
var output = require('./datas/outputConfig');

var appMiddlewares = ['createServer', 'datainit', 'scriptinit'].map(function (m) {
    return require('./middlewares/' + m);
});
Connect(null, appMiddlewares);

var serverType = process.argv[2];
switch (serverType) {
    case 'cli':
        var server = require('./servers/cli');
        break;
    case 'script-init':
        break;
    default:
        output.serverTypeError(serverType);
        process.exit(0);
        break;
}

server();