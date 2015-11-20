/**
 * @module Order
 * @author Rube
 * @date 15/11/20
 * @desc send the fixed format command
 */

import CommandExec from '../common/entitys/commandExec';

class Order extends CommandExec {

    constructor() {

        super();
    }

    exec(command){

    }
}

module.exports = () => new Order();