/**
 * @module Analysis
 * @author Rube
 * @date 15/11/17
 * @desc analyse the chunk probably mean
 */

'use strict';

import Command from '../common/entitys/command';
import zcSplit from 'nodejieba';

function splitChunk(chunk) {

    let cxt = chunk.split(' ').filter(item=> {
        return item != '';
    });

    return new Command(cxt);
}

function zhcnSplit(command) {
    let content = {
        tag: zcSplit.tag(command.content),
        extract: zcSplit.extract(command.content, 4)
    };
    command.content = content;
}

module.exports = (chunk, next) => {

    let command = splitChunk(chunk);
    zhcnSplit(command);
    next(command);
};