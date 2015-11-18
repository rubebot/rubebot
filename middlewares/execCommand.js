/**
 * @module execCommand
 * @author Rube
 * @date 15/11/19
 * @desc exec Command.main
 */

const config = require('../datas/config');
import fs from 'fs';
import * as output from '../datas/outputConfig';

module.exports = (command, next)=> {

    let main = config.commandShort[command.main] || command.main;
    let isExists = fs.existsSync(`${__dirname}/../commands/${main}.js`);

    if (isExists) {
        let e = require(`../commands/${main}`)();
        if (e.async) {
            e.exec(command, next);
        } else {
            e.exec(command);
            next();
        }
    } else {
        output.commandError(main);
    }
};
