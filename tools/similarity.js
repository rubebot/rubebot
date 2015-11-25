/**
 * @module Similarity
 * @author Rube
 * @date 15/11/25
 * @desc 相似度计算
 */

export const includeSimilar = (target, source)=> {

    let sum = 0;
    source.forEach(item=> {

        if (target.indexOf(item) != -1) {
            sum++;
        }
    });
    return sum / source.length;
};

export const extractSimilar = (target, source)=> {

    let sum = 0;
    let total = 0;
    source.forEach(item=> {

        let e = item.split(':');
        if (target.indexOf(e[0]) != -1) {
            sum += parseFloat(e[1]);
        }
        total += parseFloat(e[1]);
    });
    return sum / total;
};