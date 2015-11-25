/**
 * @module Process
 * @author Rube
 * @date 15/11/24
 * @desc 脚本执行部
 */

import Script from '../common/script';

function run(message) {

    let {exChildProcess, processInfo} = message;
    let {funcStr, option, scriptName, pid} = exChildProcess;
    let ScriptClass = require(`${__dirname}/../scripts/${scriptName}`)({Script});

    let script = new ScriptClass({
        pid
    });
    script[funcStr](option);
}

process.on('message', function (m) {
    run(m);
});

