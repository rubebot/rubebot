/**
 * @module Api
 * @author Rube
 * @date 15/11/19
 * @desc send api data to net server (为 script 提供的 api)
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _entitysExprocess = require('./entitys/exprocess');

var _entitysExprocess2 = _interopRequireDefault(_entitysExprocess);

var _bucketApi = require('./bucketApi');

var bucketApi = _interopRequireWildcard(_bucketApi);

var _toolsLangTools = require('../tools/langTools');

var langTool = _interopRequireWildcard(_toolsLangTools);

var config = require('../datas/config');

var client = _net2['default'].connect({ port: config.systemPort }, function () {});

var Api = function Api() {
  _classCallCheck(this, Api);
};

Api.tool = langTool;

exports['default'] = Api;
module.exports = exports['default'];