/**
 * @module Help
 * @author Rube
 * @date 15/11/26
 * @desc help create tool
 */

const clc = require('cli-color');

class Help {
    constructor() {
        this.help = [];
    }

    set(params, desc) {
        this.help.push({
            params,
            desc
        })
    }

    toString() {
        let tip = clc.bold.yellow('参数:\n');
        this.help.forEach((h, index)=> {
            tip += `     ${clc.bold.cyan(h.params)}          ${clc.bold.green(h.desc)}`;
            if (index != this.help.length - 1) {
                tip += '\n';
            }
        });
        return tip;
    }
}

export default Help;
