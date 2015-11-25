/**
 * @module EmitTable
 * @author Rube
 * @date 15/11/23
 * @desc EmitTable Entity
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmitTable = (function () {
    function EmitTable() {
        _classCallCheck(this, EmitTable);

        this.commandEmitTable = {};
        this.wordsEmitTable = [];
    }

    _createClass(EmitTable, [{
        key: "setOrder",
        value: function setOrder(command, funcStr) {
            this.commandEmitTable[command] = funcStr;
        }
    }, {
        key: "setWords",
        value: function setWords(words, funcStr) {
            this.wordsEmitTable.push({
                words: words,
                funcStr: funcStr
            });
        }
    }]);

    return EmitTable;
})();

exports["default"] = EmitTable;
module.exports = exports["default"];