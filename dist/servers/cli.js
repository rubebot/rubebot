/**
 * @module Cli
 * @author Rube
 * @date 15/11/19
 * @desc provide the cli server to rubebot system
 */

'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _commonBucketApi = require('../common/bucketApi');

var bucketApi = _interopRequireWildcard(_commonBucketApi);

var Connect = require('../tools/connect');
var config = require('../datas/config');
var output = require('../datas/outputConfig');

module.exports = function () {

    var middlewares = ['analysis', 'execCommand'].map(function (m) {
        return require('../middlewares/' + m);
    });

    bucketApi.addService('local');
    bucketApi.setServiceStatus('local');
    bucketApi.setOnlineStatus(true);

    var robotName = config.robotName;
    var endChar = config.endChar;

    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', function () {

        var chunk = process.stdin.read();
        if (chunk != null) {
            chunk = ('' + chunk).substr(0, chunk.length - 1).trim();
            Connect(chunk, middlewares);
            output.robotName(robotName + endChar);
        }
    });

    output.robotName(robotName + endChar);
};