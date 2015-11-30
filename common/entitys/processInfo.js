/**
 * @module ProcessInfo
 * @author Rube
 * @date 15/11/25
 * @desc memoryDb 里面存储的 process info
 */

class ProcessInfo {

    constructor() {
        this.pid = null;
        this.processConfig = null;
        this.receiveTime = 0;
    }

    setPid(pid) {
        this.pid = pid;
    }

    setProcessConfig(processConfig) {
        this.processConfig = processConfig;
    }

    incReceiveTime() {
        this.receiveTime++;
    }
}

export default ProcessInfo;
