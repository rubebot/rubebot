/**
 * @module bucketExec
 * @author Rube
 * @date 15/11/20
 * @desc do save runtime data (数据操作 api)
 */

'use strict';
import * as bucket from '../bucket';
import * as output from '../datas/outputConfig';

let serviceID = 0;
let processID = 0;

module.exports = {

    /**
     * set Online status
     * @param {Boolean} isOnline true|false
     */
    setOnlineStatus: isOnline => {

        isOnline = isOnline ? '1' : '0';
        bucket.setMemory({
            key: 'onlineStatus',
            value: isOnline
        });
    },
    /**
     * get Online status
     * @param {Function} cb callback
     */
    getOnlineStatus: cb=> {

        bucket.getMemory('onlineStatus', cb);
    },
    /**
     * set current service choose
     * @param {String} service service's name eg.'local','serverName'
     */
    setServiceStatus: service => {

        bucket.setMemory({
            key: 'serviceStatus',
            value: service
        });
    },
    /**
     * add service in list
     * @param {String} service service name
     */
    addService: service => {

        bucket.setMemory({
            key: 'service-' + serviceID,
            value: service
        });
        serviceID++;
    },
    /**
     * get service list
     * @param {Function} cb callback
     * -{Error} error sqlite3 error
     * -{Array} rows data from kv memory table
     */
    getServiceList: cb => {

        bucket.getMemory('service-%', cb);
    },
    /**
     * add process in list
     * @param {Object} processInfo
     */
    addProcess: processInfo => {

        processInfo = JSON.stringify(processInfo);
        bucket.setMemory({
            key: 'process-' + processID,
            value: processInfo
        });
        processID++;
    },
    /**
     * get process list
     * @param {Function} cb callback
     */
    getProcessList: cb => {

        bucket.getMemory('process-%', cb);
    },
    /**
     * cache the script modules in the memory
     * @param {Array} scriptModules script modules Entity
     * @param {Array} scriptModulesInfo script modules detail info
     */
    setScriptModules: (scriptModules) => {

        return bucket.setCache('scriptModules', scriptModules);
    },
    /**
     * get script modules all or one
     * @param {String} [name] script's name , if name == null then return all modules
     * @returns {Object || Array}
     */
    getScriptModules: (name) => {

        if (name) {

            let rs = bucket.getCache('scriptModules').filter(item=> {
                if (item.name == name) {
                    return true;
                }
                return false;
            });

            if (rs.length >= 1) {
                rs.length > 1 && output.scriptSameWarn(name);
                return rs[0];
            }

            return null;
        } else {
            return bucket.getCache('scriptModules');
        }
    }
};
