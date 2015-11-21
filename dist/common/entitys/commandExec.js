/**
 * @module CommandExec
 * @author Rube
 * @date 15/11/20
 * @desc command father class
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandExec = (function () {
    function CommandExec(async) {
        _classCallCheck(this, CommandExec);

        this.async = async ? true : false;
    }

    _createClass(CommandExec, [{
        key: "exec",
        value: function exec() {}
    }]);

    return CommandExec;
})();

exports["default"] = CommandExec;
module.exports = exports["default"];