/**
 * @module ApiExec
 * @author Rube
 * @date 15/11/20
 * @desc exec api  (操作客户端的 api)
 */

import ExProcess from './entitys/exprocess';
import * as output from '../datas/outputConfig';

let exec = {

};

export default (exProcessText)=> {

    let obj = ExProcess.parse(exProcessText);
    exec[obj.method] && exec[obj.method](obj.pid, obj.content);
};

