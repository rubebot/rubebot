/**
 * @module ApiExec
 * @author Rube
 * @date 15/11/20
 * @desc exec api  (操作客户端的 api)
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entitysExprocess = require('./entitys/exprocess');

var _entitysExprocess2 = _interopRequireDefault(_entitysExprocess);

var _datasOutputConfig = require('../datas/outputConfig');

var output = _interopRequireWildcard(_datasOutputConfig);

var exec = {};

exports['default'] = function (exProcessText) {

  var obj = _entitysExprocess2['default'].parse(exProcessText);
  exec[obj.method] && exec[obj.method](obj.pid, obj.content);
};

module.exports = exports['default'];