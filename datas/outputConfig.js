/**
 * @module outputConfig
 * @author Rube
 * @date 15/11/17
 * @desc process.stdout.write's style
 */

const clc = require('cli-color');

const out = process.stdout;

module.exports = {
    robotName: text => out.write(clc.bold.green(text)),
    serverTypeError: type => console.log(clc.bold.red(`No server type \'${type}\' !`)),
    commandError: command => console.log(clc.bold.red(`No command \'${command}\' !`)),
    scriptSameWarn: scriptName => console.log(clc.bold.yellow(`Have the same name script \'${scriptName}\'`)),
    scriptNotFound: scriptName => console.log(clc.bold.red(`script \'${scriptName}\' not found !`)),
    funcStrNotFound: funcStr => console.log(clc.bold.red(`can\'t run \'${funcStr}\' !`)),
    sayOutput: tip => console.log(clc.bold.cyan(tip)),
    log: (color, text) => console.log(clc.bold[color](log)),
    processConfigError: (text)=> console.log(clc.bold.red('processConfig Error: ' + (text || ''))),
    processConfigTypeError: ()=>console.log(clc.bold.red('启动方式错误!'))
};