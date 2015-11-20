/**
 * @module createServer
 * @author Rube
 * @date 15/11/19
 * @desc create net Server (System)
 */

import net from 'net';
import clientApi from '../common/clientApi';

const config = require('../datas/config');

module.exports = (next)=> {

    let server = net.createServer(function (c) {

        c.on('data', (chunk)=> {
            clientApi(chunk.toString());
        });
    });

    server.listen(config.systemPort);
    next();
};
