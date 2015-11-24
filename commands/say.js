/**
 * @module Say
 * @author Rube
 * @date 15/11/19
 * @desc Say Command
 */

import CommandExec from '../common/entitys/commandExec';

class Say extends CommandExec {

    constructor() {

        super();
    }

    exec(command) {

        let scripts = this.getScriptModules();
        let emitList = [];
        scripts.forEach((script, index)=> {

            let wordsEmitTable = script.emitTable.wordsEmitTable;
            let description = script.description;
        })
    }
}

module.exports = () => new Say();