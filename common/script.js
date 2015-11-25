/**
 * @module Script
 * @author Rube
 * @date 15/11/19
 * @desc script's method
 */

import Api from './api';
import EmitTable from '../common/entitys/emitTable';
import ProcessConfig from '../common/entitys/processConfig';

class Script {

    constructor(cxt) {
        this.cxt = cxt;
    }

    on_process_create() {

    }

    on_process_start() {

    }

    on_process_resume() {

    }

    on_process_pause() {

    }

    on_process_stop() {

    }

    on_process_destroy() {
        process.exit();
    }

    on_process_exec(funcStr, params) {
        return this[funcStr](params);
    }

    static get_processConfig() {

        let config = new ProcessConfig();
        config.setServiceType(ProcessConfig.START_SERVICE_EVERY);
        config.setReceiveType(ProcessConfig.RECEIVE_ONCE);
        config.setRunType(ProcessConfig.RUN_FAST);
        return config;
    }

    static get_emitTable() {

        let emitTable = new EmitTable();
        return emitTable;
    }

    static get_description() {
        return 'no description';
    }

    static get_ask() {
        return 'no ask';
    }

    static get_help() {
        return 'no help';
    }
}

Script.ProcessConfig = ProcessConfig;
Script.EmitTable = EmitTable;

export default Script;

