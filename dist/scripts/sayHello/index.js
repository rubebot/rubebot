/**
 * @module SayHello
 * @author Rube
 * @date 15/11/21
 * @desc say 'hello world'
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (context) {
    var Script = context.Script;

    var SayHello = (function (_Script) {
        _inherits(SayHello, _Script);

        function SayHello(cxt) {
            _classCallCheck(this, SayHello);

            _get(Object.getPrototypeOf(SayHello.prototype), 'constructor', this).call(this, cxt);
        }

        _createClass(SayHello, [{
            key: 'time',
            value: function time(what) {
                var help = new Script.Help();
                help.set('-time [秒]', '定时间');

                var flag = true;
                for (var w in what) {
                    flag = false;
                }

                if (flag) {
                    console.log(help.toString());
                } else {
                    setTimeout(function () {
                        console.log('时间到');
                    }, parseInt(what.time) * 1000);
                }
            }
        }, {
            key: 'sayHello',
            value: function sayHello(what) {
                var help = new Script.Help();
                help.set('-name [名字]', '你叫什么');
                help.set('--myname', '我叫什么');

                var flag = true;
                for (var w in what) {
                    flag = false;
                }

                if (flag) {
                    console.log(help.toString());
                } else if (what.name) {
                    console.log('Your name is ' + what.name);
                } else {
                    console.log('My name is Rube');
                }
            }
        }, {
            key: 'sayMaMa',
            value: function sayMaMa() {
                console.log('测试成功~!');
            }
        }], [{
            key: 'get_description',
            value: function get_description() {
                return {
                    sayHello: 'jiao hello',
                    test: '测试',
                    setTimeout: '定时'
                };
            }
        }, {
            key: 'get_emitTable',
            value: function get_emitTable() {

                var emitTable = new Script.EmitTable();
                emitTable.setOrder('sayHello', 'sayHello');
                emitTable.setOrder('test', 'sayMaMa');
                emitTable.setOrder('setTimeout', 'time');

                emitTable.setWords('你好', 'sayHello');
                emitTable.setWords('吃饭睡觉打豆豆', 'test');
                emitTable.setWords('测试测试', 'test');
                emitTable.setWords('定时', 'setTimeout');

                return emitTable;
            }
        }]);

        return SayHello;
    })(Script);

    return SayHello;
};