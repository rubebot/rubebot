/**
 * @module SayHello
 * @author Rube
 * @date 15/11/21
 * @desc say 'hello world'
 */

module.exports = (context) => {

    let {Script, Api} = context;

    class SayHello extends Script {

        constructor(cxt) {
            super(cxt);
        }

        static get_description() {
            return {
                sayHello: 'jiao hello',
                test: '测试',
                setTimeout: '定时'
            };
        }

        static get_emitTable() {

            let emitTable = new Script.EmitTable();
            emitTable.setOrder('sayHello', 'sayHello');
            emitTable.setOrder('test', 'sayMaMa');
            emitTable.setOrder('setTimeout', 'time');

            emitTable.setWords('你好', 'sayHello');
            emitTable.setWords('吃饭睡觉打豆豆', 'test');
            emitTable.setWords('测试测试', 'test');
            emitTable.setWords('定时', 'setTimeout');

            return emitTable;
        }

        static get_processConfig() {

            return Script.get_processConfig().setRunType(Script.ProcessConfig.RUN_DAEMON);
        }

        time(what) {
            let help = new Script.Help();
            help.set('-time [秒]', '定时间');

            if (Api.tool.objectIsNull(what)) {
                console.log(help.toString());
            } else {
                setTimeout(()=> {
                    console.log('时间到');
                }, parseInt(what.time) * 1000);
            }
        }

        sayHello(what) {
            let help = new Script.Help();
            help.set('-name [名字]', '你叫什么');
            help.set('--myname', '我叫什么');

            if (Api.tool.objectIsNull(what)) {
                console.log(help.toString());
            } else if (what.name) {
                console.log('Your name is ' + what.name);
            } else {
                console.log('My name is Rube');
            }
        }

        sayMaMa() {
            console.log('测试成功~!');
        }
    }

    return SayHello;
};
