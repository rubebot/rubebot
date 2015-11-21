/**
 * @module ProcessConfig
 * @author Rube
 * @date 15/11/24
 * @desc process config
 */

class ProcessConfig {

    constructor(serviceType, receiveType){

        this.serviceType = serviceType;
        this.receiveType = receiveType;
    }

    setServiceType(serviceType) {

        this.serviceType = serviceType;
    }

    setReceiveType(receiveType) {

        this.receiveType = receiveType;
    }
}

ProcessConfig.START_SERVICE_ONCE = 1;
ProcessConfig.START_SERVICE_EVERY = 2;
ProcessConfig.RECEIVE_ONCE = 3;
ProcessConfig.RECEIVE_EVERY = 4;

export default ProcessConfig;