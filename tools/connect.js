/**
 * @module Connect
 * @author Rube
 * @date 15/11/17
 * @desc Connect every middleware
 */

'use strict';

class Connect {

    constructor(chunk, middlewareList) {

        let length = middlewareList.length;
        if (!length) {
            return;
        }

        let mws = [];
        mws[length] = ()=> {
        };

        for (let i = length - 1; i >= 0; i--) {
            mws[i] = function () {                                               //THINK: diff arguments (function and ()=>{})

                let argv = Array.prototype.slice.call(arguments);
                argv.push(mws[i + 1]);
                middlewareList[i].apply(null, argv);
            };
        }

        if (chunk) {
            mws[0](chunk);
        } else {
            mws[0]();
        }
    }
}

module.exports = (chunk, middlewareList)=> {
    return new Connect(chunk, middlewareList);
};

