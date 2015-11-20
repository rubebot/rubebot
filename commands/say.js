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

    exec(command){
        console.log(command)
    }
}

module.exports = () => new Say();