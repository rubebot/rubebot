/**
 * @module ScriptInit
 * @author Rube
 * @date 15/11/21
 * @desc script init
 */

'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _commonScript = require('../common/script');

var _commonScript2 = _interopRequireDefault(_commonScript);

var _commonBucketApi = require('../common/bucketApi');

var bucketApi = _interopRequireWildcard(_commonBucketApi);

module.exports = function (next) {

    var scripts = _fs2['default'].readdirSync(__dirname + '/../scripts');
    var scriptModules = scripts.map(function (path, index) {

        var script = require('../scripts/' + path)({ Script: _commonScript2['default'] });
        return {
            id: index,
            name: path,
            description: script.get_description(),
            emitTable: script.get_emitTable(),
            script: script
        };
    });

    bucketApi.setScriptModules(scriptModules);
    next();
};