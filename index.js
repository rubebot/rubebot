/**
 * @author Rube
 * @date 15/11/16
 * @desc start script
 */

'use strict';

const net = require('net');
const Connect = require('./common/connect');
const output = require('./datas/outputConfig');

let appMiddlewares = ['createServer', 'datainit', 'scriptinit'].map(m=> {
    return require('./middlewares/' + m);
});
Connect(null, appMiddlewares);

let serverType = process.argv[2];
switch (serverType) {
    case 'cli':
        let server = require('./servers/cli');
        break;
    case 'script-init':
        break;
    default:
        output.serverTypeError(serverType);
        process.exit(0);
        break
}

server();
