/**
 * @module Analysis
 * @author Rube
 * @date 15/11/17
 * @desc analyse the chunk probably mean
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonEntitysCommand = require('../common/entitys/command');

var _commonEntitysCommand2 = _interopRequireDefault(_commonEntitysCommand);

var _nodejieba = require('nodejieba');

var _nodejieba2 = _interopRequireDefault(_nodejieba);

function splitChunk(chunk) {

    var cxt = chunk.split(' ').filter(function (item) {
        return item != '';
    });

    return new _commonEntitysCommand2['default'](cxt);
}

function zhcnSplit(command) {
    var content = {
        tag: _nodejieba2['default'].tag(command.content),
        extract: _nodejieba2['default'].extract(command.content, 4)
    };
    command.content = content;
}

module.exports = function (chunk, next) {

    var command = splitChunk(chunk);
    zhcnSplit(command);
    next(command);
};