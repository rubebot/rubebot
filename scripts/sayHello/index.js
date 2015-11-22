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

        info_desc() {
            super.info_desc('hello rubebot world!~~');
        }
    }

    return SayHello;
};
