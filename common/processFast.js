/**
 * @module ProcessFast
 * @author Rube
 * @date 15/11/25
 * @desc 快速执行模式的执行部
 */

import Script from '../common/script';
import Api from '../common/api';

const processFast = (message)=> {
    let {exChildProcess, processInfo} = message;
    let {funcStr, option, scriptName, pid} = exChildProcess;
    let ScriptClass = require(`${__dirname}/../scripts/${scriptName}`)({Script, Api});

    let script = new ScriptClass({
        pid
    });

    script.on_process_create();
    script.on_process_start();
    script.on_process_exec(funcStr, option);
    return script;
};

export default processFast;