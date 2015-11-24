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

    setOrder(funcStr, command) {
        this.commandEmitTable[command] = funcStr;
    }

    setWords(funcStr, words) {
        this.wordsEmitTable.push({
            words,
            funcStr
        });
    }
}

export default EmitTable;
