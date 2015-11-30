/**
 * @module Say
 * @author Rube
 * @date 15/11/19
 * @desc Say Command
 */

import CommandExec from '../common/entitys/commandExec';
import * as similarity from '../tools/similarity';
import * as output from '../datas/outputConfig';
const clc = require('cli-color');

let tagP = 0.5;
let extractP = 0.5;

class Say extends CommandExec {

    constructor() {

        super();
    }

    exec(command) {

        let scripts = this.getScriptModules();
        let emitList = [];
        scripts.forEach((script, index)=> {

            let wordsEmitTable = script.emitTable.wordsEmitTable;
            let description = script.description;

            wordsEmitTable.forEach(obj=> {
                let {words, order} = obj;
                let tp = similarity.includeSimilar(command.content.tag, words.tag);
                let ep = similarity.extractSimilar(command.content.extract.map(w=> {
                    return w.split(':')[0];
                }), words.extract);
                if (tp >= tagP && ep >= extractP) {
                    emitList.push({
                        index,
                        ep,
                        tp,
                        order,
                        scriptName: script.name
                    })
                }
            })
        });

        let tip = '\n';
        emitList.forEach((emit, i)=> {
            let {index, ep, tp, order, scriptName} = emit;
            let script = scripts[index];
            tip += `${clc.yellow(script.description[order])}:\no -e ${scriptName} ${order}\n`;
            i != emitList.length - 1 && (tip += '\n');
        });
        output.sayOutput(tip);
    }
}

module.exports = () => new Say();