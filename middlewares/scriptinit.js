/**
 * @module ScriptInit
 * @author Rube
 * @date 15/11/21
 * @desc script init
 */

import fs from 'fs';
import Script from '../common/script';
import ScriptInfo from '../common/entitys/scriptInfo';
import * as bucketApi from '../common/bucketApi';

module.exports = (next) => {

    let scripts = fs.readdirSync(__dirname + '/../scripts');
    let scriptModules = scripts.map((path, index)=> {

        let script = require(`../scripts/${path}`)({Script});

        let scriptInfo = new ScriptInfo(index, path, script);
        scriptInfo.setDescription(script.get_description());
        scriptInfo.setEmitTable(script.get_emitTable());
        return scriptInfo
    });

    bucketApi.setScriptModules(scriptModules);
    next();
};
