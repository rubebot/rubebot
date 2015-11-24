/**
 * @module Command
 * @author Rube
 * @date 15/11/18
 * @desc Command format
 */

class Command {

    constructor(cxt) {

        let length = cxt.length;
        this.main = cxt[0];
        this.options = {};

        for (var i = 1; i < length; i++) {
            let obj = this.options;
            if (cxt[i].indexOf('--') == 0) {

                obj[cxt[i].substr(2)] = true;
            } else if (cxt[i].indexOf('-') == 0) {

                obj[cxt[i].substr(1)] = cxt[i + 1];
                i++;
            } else {
                break;
            }
        }

        this.token = this.options['token'] || 'local';              //TODO:用户标识的通用性研究,特别是在做服务端的时候
        this.content = cxt.slice(i, length).join(' ');
        this.nativeContent = this.content;
    }
}

export default Command;