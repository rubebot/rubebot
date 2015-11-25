/**
 * @module Similarity
 * @author Rube
 * @date 15/11/25
 * @desc 相似度计算
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var includeSimilar = function includeSimilar(target, source) {

    var sum = 0;
    source.forEach(function (item) {

        if (target.indexOf(item) != -1) {
            sum++;
        }
    });
    return sum / source.length;
};

exports.includeSimilar = includeSimilar;
var extractSimilar = function extractSimilar(target, source) {

    var sum = 0;
    var total = 0;
    source.forEach(function (item) {

        var e = item.split(':');
        if (target.indexOf(e[0]) != -1) {
            sum += parseFloat(e[1]);
        }
        total += parseFloat(e[1]);
    });
    return sum / total;
};
exports.extractSimilar = extractSimilar;