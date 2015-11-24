/**
 * @module ScriptInfo
 * @author Rube
 * @date 15/11/24
 * @desc script info in bucket
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptInfo = (function () {
    function ScriptInfo(id, name, script) {
        _classCallCheck(this, ScriptInfo);

        this.id = id;
        this.name = name;
        this.script = script;
    }

    _createClass(ScriptInfo, [{
        key: "setEmitTable",
        value: function setEmitTable(emitTable) {

            this.emitTable = emitTable;
        }
    }, {
        key: "setDescription",
        value: function setDescription(description) {

            this.description = description;
        }
    }]);

    return ScriptInfo;
})();

exports["default"] = ScriptInfo;
module.exports = exports["default"];