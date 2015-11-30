/**
 * @module Connect
 * @author Rube
 * @date 15/11/17
 * @desc Connect every middleware
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Connect = function Connect(chunk, middlewareList) {
    _classCallCheck(this, Connect);

    var length = middlewareList.length;
    if (!length) {
        return;
    }

    var mws = [];
    mws[length] = function () {};

    var _loop = function (i) {
        mws[i] = function () {
            //THINK: diff arguments (function and ()=>{})

            var argv = Array.prototype.slice.call(arguments);
            argv.push(mws[i + 1]);
            middlewareList[i].apply(null, argv);
        };
    };

    for (var i = length - 1; i >= 0; i--) {
        _loop(i);
    }

    if (chunk) {
        mws[0](chunk);
    } else {
        mws[0]();
    }
};

module.exports = function (chunk, middlewareList) {
    return new Connect(chunk, middlewareList);
};