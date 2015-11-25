/**
 * @module EmitTable
 * @author Rube
 * @date 15/11/23
 * @desc EmitTable Entity
 */

class EmitTable {

    constructor() {
        this.commandEmitTable = {};
        this.wordsEmitTable = [];
    }

    setOrder(command, funcStr) {
        this.commandEmitTable[command] = funcStr;
    }

    setWords(words, funcStr) {
        this.wordsEmitTable.push({
            words,
            funcStr
        });
    }
}

export default EmitTable;
