/**
 * @page
 * @module
 * @author Rube
 * @date 15/11/30
 * @desc
 */
import ProcessConfig from '../entitys/processConfig';
import * as output from '../../datas/outputConfig';
import processFast from '../processFast';
import processDaemon from '../processDaemon';
import * as bucketApi from '../bucketApi';
import child_process from 'child_process';

const SERO = (obj)=> {

    let {processConfig, exChildProcess, processInfo} = obj;

    if (processConfig.runType == ProcessConfig.RUN_FAST) {

        processFast({
            processInfo,
            exChildProcess
        });
    } else if (processConfig.runType == ProcessConfig.RUN_DAEMON) {

        let p = child_process.fork(__dirname + '/../processDaemon.js');
        processInfo.setPid(p.pid);
        processInfo.incReceiveTime();
        let selfpid = bucketApi.addProcess(processInfo);
        exChildProcess.setPid(selfpid);
        p.send({
            exChildProcess,
            processInfo
        });         //TODO:最后需要结束

    } else {
        output.processConfigError();
    }
};

export default SERO;
