/**
 * @module ProcessConfig
 * @author Rube
 * @date 15/11/24
 * @desc process config
 */

class ProcessConfig {

    constructor(serviceType, receiveType) {

        this.serviceType = serviceType;
        this.receiveType = receiveType;
        return this;
    }

    setServiceType(serviceType) {

        this.serviceType = serviceType;
        return this;
    }

    setReceiveType(receiveType) {

        this.receiveType = receiveType;
        return this;
    }

    setRunType(runType) {

        this.runType = runType;
        return this;
    }
}


ProcessConfig.START_SERVICE_ONCE = 1;
ProcessConfig.START_SERVICE_EVERY = 2;
ProcessConfig.RECEIVE_ONCE = 3;
ProcessConfig.RECEIVE_EVERY = 4;
ProcessConfig.RUN_FAST = 5;
ProcessConfig.RUN_DAEMON = 6;

let S_O_R_O = ProcessConfig.START_SERVICE_ONCE + '' + ProcessConfig.RECEIVE_ONCE;
let S_O_R_E = ProcessConfig.START_SERVICE_ONCE + '' + ProcessConfig.RECEIVE_EVERY;
let S_E_R_O = ProcessConfig.START_SERVICE_EVERY + '' + ProcessConfig.RECEIVE_ONCE;
let S_E_R_E = ProcessConfig.START_SERVICE_EVERY + '' + ProcessConfig.RECEIVE_EVERY;
ProcessConfig.SORO = S_O_R_O;
ProcessConfig.SORE = S_O_R_E;
ProcessConfig.SERO = S_E_R_O;
ProcessConfig.SERE = S_E_R_E;

export default ProcessConfig;