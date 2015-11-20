/**
 * @module Switch
 * @author Rube
 * @date 15/11/20
 * @desc change the robot
 */

import CommandExec from '../common/entitys/commandExec';

class Switch extends CommandExec {

    constructor() {

        super();
    }

    exec(command){

    }
}

module.exports = () => new Switch();