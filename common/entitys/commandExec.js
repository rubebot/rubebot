/**
 * @module CommandExec
 * @author Rube
 * @date 15/11/20
 * @desc command father class
 */

import * as bucketApi from '../bucketApi';

class CommandExec {

    constructor(async) {

        this.async = async ? true : false;
    }

    exec(command) {

    }

    getScriptModules(name) {

        return bucketApi.getScriptModules(name);
    }
}

export default CommandExec;
