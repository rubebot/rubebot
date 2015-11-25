/**
 * @module ExChildProcess
 * @author Rube
 * @date 15/11/25
 * @desc 与 fork 的进程进行交互
 */

class ExChildProcess {

    constructor() {
        this.funcStr = null;
        this.scriptName = null;
        this.option = null;
        this.pid = null;
    }

    setPid(pid) {
        this.pid = pid;
    }

    setFuncStr(funcStr) {

        this.funcStr = funcStr;
    }

    setScriptName(scriptName) {

        this.scriptName = scriptName;
    }

    setOption(option) {

        this.option = option;
    }
}

export default ExChildProcess;
