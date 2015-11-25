/**
 * @module ProcessDaemon
 * @author Rube
 * @date 15/11/24
 * @desc 以守护进程方式执行的脚本执行部
 */

import Script from '../common/script';

function run(message) {

    let {exChildProcess, processInfo} = message;
    let {funcStr, option, scriptName, pid} = exChildProcess;
    let ScriptClass = require(`${__dirname}/../scripts/${scriptName}`)({Script});

    let script = new ScriptClass({
        pid
    });
    script.on_process_create();
    script.on_process_start();
    script.on_process_exec(funcStr, option);
}

process.on('message', function (m) {
    run(m);
});

