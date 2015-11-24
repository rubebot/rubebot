/**
 * @module Order
 * @author Rube
 * @date 15/11/20
 * @desc send the fixed format command
 */

import CommandExec from '../common/entitys/commandExec';
import * as output from '../datas/outputConfig';

class Order extends CommandExec {

    constructor() {

        super();
    }

    exec(command) {

        function findScript(arr, name) {
            let scripts = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name === name) {
                    scripts.push(arr[i]);
                }
            }
            return scripts;
        }

        let scripts = this.getScriptModules();
        let execScriptName = command.options['e'];
        let execScript = findScript(scripts, execScriptName);

        if (execScriptName && execScript.length > 0) {
            if (execScript.length > 1) {
                output.scriptSameWarn(execScriptName);
            } else {

            }
        } else {
            output.scriptNotFound(execScriptName);
        }
    }
}

module.exports = () => new Order();