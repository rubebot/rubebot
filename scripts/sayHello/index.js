/**
 * @module SayHello
 * @author Rube
 * @date 15/11/21
 * @desc say 'hello world'
 */

module.exports = (context) => {

    let {Script} = context;

    class SayHello extends Script {

        constructor(cxt) {
            super(cxt);
        }

        static get_emitTable() {

            let emitTable = new Script.EmitTable();
            emitTable.setOrder('sayHello', 'sayHello');
            emitTable.setOrder('test', 'sayMaMa');
            return emitTable;
        }

        sayHello(what) {
            console.log(what);
        }

        sayMaMa() {
            console.log('mama');
        }

        static get_description() {
            return 'say hello';
        }

        static get_ask() {
            return '是否要说hello';
        }
    }

    return SayHello;
};
