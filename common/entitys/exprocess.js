/**
 * @module ExProcess
 * @author Rube
 * @date 15/11/19
 * @desc process exchange info format
 */

class ExProcess {

    constructor(pid, method, content) {
        this.pid = pid;
        this.method = method;
        this.content = content;
    }

    toString() {
        return this.pid + ':' + this.method + ':' + this.content;
    }

    static parse(processText) {

        let arr = processText.split(':');
        return {
            pid: arr[0],
            method: arr[1],
            content: arr[2]
        }
    }
}

export default ExProcess;
