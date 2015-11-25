/**
 * @module Order
 * @author Rube
 * @date 15/11/20
 * @desc send the fixed format command
 */

import CommandExec from '../common/entitys/commandExec';
import * as output from '../datas/outputConfig';
import * as bucketApi from '../common/bucketApi';
import Command from '../common/entitys/command';
import ProcessConfig from '../common/entitys/processConfig';
import ProcessInfo from '../common/entitys/processInfo';
import ExChildProcess from '../common/entitys/exchildProcess';
import child_process from 'child_process';

function splitChunk(chunk) {

    let cxt = chunk.split(' ').filter(item=> {
        return item != '';
    });

    return new Command(cxt);
}

class Order extends CommandExec {

    constructor() {

        super();
    }

    exec(command) {

        function findScript(arr, name) {
            let scripts = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name === name) {
                    scripts.push(arr[i]);
                }
            }
            return scripts;
        }

        let scripts = this.getScriptModules();
        let execScriptName = command.options['e'];
        let execScript = findScript(scripts, execScriptName);

        if (execScriptName && execScript.length > 0) {
            if (execScript.length > 1) {
                output.scriptSameWarn(execScriptName);
            } else {

                let funcCommand = splitChunk(command.nativeContent);
                let funcStr = execScript[0].emitTable.commandEmitTable[funcCommand.main];
                let processConfig = execScript[0].script.get_processConfig();

                if (funcStr) {

                    let exChildProcess = new ExChildProcess();
                    let processInfo = new ProcessInfo();
                    exChildProcess.setFuncStr(funcStr);
                    exChildProcess.setScriptName(execScriptName);
                    exChildProcess.setOption(funcCommand.options);

                    if (processConfig.runType == ProcessConfig.RUN_DAEMON) {

                        let p = child_process.fork(__dirname + '/../common/processDaemon.js');
                        processInfo.setPid(p.pid);
                        let selfpid = bucketApi.addProcess(processInfo);
                        exChildProcess.setPid(selfpid);

                        p.send({
                            exChildProcess,
                            processInfo                  //TODO多种运行方式,输出管理(通知和直接输出)
                        });
                    } else if (processConfig.runType == ProcessConfig.RUN_FAST) {

                        let selfpid = bucketApi.addProcess(processInfo);
                        exChildProcess.setPid(selfpid);

                        const processFast = require('../common/processFast');
                        processFast({
                            exChildProcess,
                            processInfo
                        });
                    }

                } else {
                    //TODO not found
                }
            }
        } else {
            output.scriptNotFound(execScriptName);
        }
    }
}

module.exports = () => new Order();