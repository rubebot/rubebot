/**
 * @module ScriptInfo
 * @author Rube
 * @date 15/11/24
 * @desc script info in bucket
 */

class ScriptInfo {

    constructor(id, name, script) {

        this.id = id;
        this.name = name;
        this.script = script;
    }

    setEmitTable(emitTable) {

        this.emitTable = emitTable;
    }

    setDescription(description) {

        this.description = description;
    }
}

export default ScriptInfo;
