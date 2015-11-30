/**
 * @module EmitTable
 * @author Rube
 * @date 15/11/23
 * @desc EmitTable Entity
 */

import zcSplit from 'nodejieba';

function zhcnSplit(words) {
    let content = {
        tag: zcSplit.tag(words),
        extract: zcSplit.extract(words, 4)
    };
    return content;
}

class EmitTable {

    constructor() {
        this.commandEmitTable = {};
        this.wordsEmitTable = [];
    }

    setOrder(command, funcStr) {
        this.commandEmitTable[command] = funcStr;
    }

    setWords(words, order) {

        words = zhcnSplit(words);
        this.wordsEmitTable.push({
            words,
            order
        });
    }
}

export default EmitTable;
