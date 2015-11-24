/**
 * @module Api
 * @author Rube
 * @date 15/11/19
 * @desc send api data to net server (为 script 提供的 api)
 */

import net from 'net';
import ExProcess from './entitys/exprocess';
import * as bucketApi from './bucketApi';

const config = require('../datas/config');

let client = net.connect({port: config.systemPort}, ()=> {
});

class Api {

}

export default Api;
