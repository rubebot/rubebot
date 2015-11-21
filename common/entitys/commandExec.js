/**
 * @module CommandExec
 * @author Rube
 * @date 15/11/20
 * @desc command father class
 */

class CommandExec {

    constructor(async) {

        this.async = async ? true : false;
    }

    exec(){

    }
}

export default CommandExec;
