/**
 * @module LangTool
 * @author Rube
 * @date 15/11/28
 * @desc 语言相关的工具
 */

export const objectIsNull = (obj)=> {

    let flag = true;
    for (let o in obj) {
        flag = false;
        break;
    }
    return flag;
};
