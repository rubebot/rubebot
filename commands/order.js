/**
 * @module Order
 * @author Rube
 * @date 15/11/20
 * @desc send the fixed format command
 */

import * as output from '../datas/outputConfig';
import * as bucketApi from '../common/bucketApi';
import CommandExec from '../common/entitys/commandExec';
import Command from '../common/entitys/command';
import ProcessConfig from '../common/entitys/processConfig';
import ProcessInfo from '../common/entitys/processInfo';
import ExChildProcess from '../common/entitys/exchildProcess';

let exec = [];
exec[ProcessConfig.SERE] = require('../common/exec/SERE');
exec[ProcessConfig.SORO] = require('../common/exec/SORO');
exec[ProcessConfig.SERO] = require('../common/exec/SERO');
exec[ProcessConfig.SORE] = require('../common/exec/SORE');

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
                return output.scriptSameWarn(execScriptName);
            }

            let funcCommand = splitChunk(command.nativeContent);
            let funcStr = execScript[0].emitTable.commandEmitTable[funcCommand.main];
            let processConfig = execScript[0].script.get_processConfig();

            if (funcStr) {

                let exChildProcess = new ExChildProcess();
                let processInfo = new ProcessInfo();
                processInfo.setProcessConfig(processConfig);
                exChildProcess.setFuncStr(funcStr);
                exChildProcess.setScriptName(execScriptName);
                exChildProcess.setOption(funcCommand.options);

                let SERVICE_RECEIVE_STR = processConfig.serviceType + '' + processConfig.receiveType;

                if (exec[SERVICE_RECEIVE_STR]) {
                    return exec[SERVICE_RECEIVE_STR]({
                        processConfig,
                        exChildProcess,
                        processInfo
                    });
                } else {
                    return output.processConfigError();
                }
            }
            output.funcStrNotFound(funcCommand.main);
        } else {
            output.scriptNotFound(execScriptName);
        }
    }
}

module.exports = () => new Order();