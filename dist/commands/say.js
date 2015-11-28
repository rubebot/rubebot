/**
 * @module Say
 * @author Rube
 * @date 15/11/19
 * @desc Say Command
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonEntitysCommandExec = require('../common/entitys/commandExec');

var _commonEntitysCommandExec2 = _interopRequireDefault(_commonEntitysCommandExec);

var _toolsSimilarity = require('../tools/similarity');

var similarity = _interopRequireWildcard(_toolsSimilarity);

var _datasOutputConfig = require('../datas/outputConfig');

var output = _interopRequireWildcard(_datasOutputConfig);

var clc = require('cli-color');

var tagP = 0.5;
var extractP = 0.5;

var Say = (function (_CommandExec) {
    _inherits(Say, _CommandExec);

    function Say() {
        _classCallCheck(this, Say);

        _get(Object.getPrototypeOf(Say.prototype), 'constructor', this).call(this);
    }

    _createClass(Say, [{
        key: 'exec',
        value: function exec(command) {

            var scripts = this.getScriptModules();
            var emitList = [];
            scripts.forEach(function (script, index) {

                var wordsEmitTable = script.emitTable.wordsEmitTable;
                var description = script.description;

                wordsEmitTable.forEach(function (obj) {
                    var words = obj.words;
                    var order = obj.order;

                    var tp = similarity.includeSimilar(command.content.tag, words.tag);
                    var ep = similarity.extractSimilar(command.content.extract.map(function (w) {
                        return w.split(':')[0];
                    }), words.extract);
                    if (tp >= tagP && ep >= extractP) {
                        emitList.push({
                            index: index,
                            ep: ep,
                            tp: tp,
                            order: order,
                            scriptName: script.name
                        });
                    }
                });
            });

            var tip = '\n';
            emitList.forEach(function (emit, i) {
                var index = emit.index;
                var ep = emit.ep;
                var tp = emit.tp;
                var order = emit.order;
                var scriptName = emit.scriptName;

                var script = scripts[index];
                tip += clc.yellow(script.description[order]) + ':\no -e ' + scriptName + ' ' + order + '\n';
                i != emitList.length - 1 && (tip += '\n');
            });
            output.sayOutput(tip);
        }
    }]);

    return Say;
})(_commonEntitysCommandExec2['default']);

module.exports = function () {
    return new Say();
};