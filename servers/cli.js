/**
 * @module Cli
 * @author Rube
 * @date 15/11/19
 * @desc provide the cli server to rubebot system
 */

const Connect = require('../common/connect');
const config = require('../datas/config');
const output = require('../datas/outputConfig');
import * as bucketApi from '../common/bucketApi';

module.exports = ()=> {

    let middlewares = ['analysis', 'execCommand'].map(m=> {
        return require('../middlewares/' + m);
    });

    bucketApi.addService('local');
    bucketApi.setServiceStatus('local');
    bucketApi.setOnlineStatus(true);

    let robotName = config.robotName;
    let endChar = config.endChar;

    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', ()=> {

        let chunk = process.stdin.read();
        if (chunk != null) {
            chunk = ('' + chunk).substr(0, chunk.length - 1).trim();
            Connect(chunk, middlewares);
            output.robotName(robotName + endChar);
        }
    });

    output.robotName(robotName + endChar);
};
