/**
 * @module LangTool
 * @author Rube
 * @date 15/11/28
 * @desc 语言相关的工具
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var objectIsNull = function objectIsNull(obj) {

    var flag = true;
    for (var o in obj) {
        flag = false;
        break;
    }
    return flag;
};
exports.objectIsNull = objectIsNull;