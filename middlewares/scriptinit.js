/**
 * @module ScriptInit
 * @author Rube
 * @date 15/11/21
 * @desc script init
 */

import fs from 'fs';
import Script from '../common/script';
import * as bucketApi from '../common/bucketApi';

module.exports = (next) => {

    let scripts = fs.readdirSync(__dirname + '/../scripts');
    let scriptModules = scripts.map((path, index)=> {

        let script = require(`../scripts/${path}`)({Script});
        return {
            id: index,
            name: path,
            description: script.get_description(),
            emitTable: script.get_emitTable(),
            script
        };
    });

    bucketApi.setScriptModules(scriptModules);
    next();
};
