/**
 * @module ProcessInfo
 * @author Rube
 * @date 15/11/25
 * @desc memoryDb 里面存储的 process info
 */

class ProcessInfo {

    constructor() {
        this.pid = null;
    }

    setPid(pid) {
        this.pid = pid;
    }
}

export default ProcessInfo;
