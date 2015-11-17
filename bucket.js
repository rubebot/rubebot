/**
 * @module Bucket
 * @author Rube
 * @date 15/11/17
 * @desc save runtime data
 */

'use strict';
import zcSplit from 'nodejieba';

/** nodejieba init**/
let welcome = 'hello rubebot';
zcSplit.tag(welcome);
zcSplit.extract(welcome, 4);

const sqlite3 = require('sqlite3').verbose();

let memory = new sqlite3.Database(':memory:');
let db = new sqlite3.Database('./datas/data.sqlite');
let NodeCache = require("node-cache");
let robotCache = new NodeCache();

let setKV = (datas, op, cb) => {

    let callback = typeof op == 'function' ? op : cb;
    let options = typeof op == 'function' ? null : op;

    let sql = null;

    (function () {
        let key = datas.key;
        let value = datas.value;
        if (datas.special) {
            sql = `REPLACE INTO kv (key, value, special, time) VALUES ('${key}', '${value}', '${datas.special}', '${Date.now()}')`;
        } else {
            sql = `REPLACE INTO kv (key, value, time) VALUES ('${key}', '${value}', '${Date.now()}')`;
        }
    })();

    if (options && options.memory) {
        return memory.exec(sql, callback);
    }
    return db.exec(sql, callback);
};

let deleteKV = (datas, op, cb) => {

    let callback = typeof op == 'function' ? op : cb;
    let options = typeof op == 'function' ? null : op;
    let key = typeof datas == 'string' ? datas : datas.key;

    let sql = `DELETE FROM kv WHERE key LIKE '${key}`;
    if (options && options.memory) {
        return memory.run(sql, callback);
    }
    return db.run(sql, callback);
};

let getKV = (datas, op, cb) => {

    let callback = typeof op == 'function' ? op : cb;
    let options = typeof op == 'function' ? null : op;
    let key = typeof datas == 'string' ? datas : datas.key;

    let sql = `SELECT * FROM kv WHERE key LIKE '${key}'`;

    if (options && options.memory) {
        return memory.all(sql, callback);
    }
    return db.all(sql, callback);
};

let setMemory = (datas, op, cb) => {

    return typeof op == 'function' ? setKV(datas, {memory: true}, op) : setKV(datas, Object.assign({memory: true}, op), cb);
};

let getMemory = (datas, op, cb) => {

    return typeof op == 'function' ? getKV(datas, {memory: true}, op) : getKV(datas, Object.assign({memory: true}, op), cb);
};

let deleteMemory = (datas, op, cb) => {

    return typeof op == 'function' ? deleteKV(datas, {memory: true}, op) : deleteKV(datas, Object.assign({memory: true}, op), cb);
};

let runMemory = sql => {

    return memory.run(sql);
};

let runDB = sql => {

    return memory.run(sql);
};

let setCache = (key, value, options) => {

    return robotCache.set(key, value, options);
};

let getCache = key => {

    if (typeof key === 'string') {
        return robotCache.get(key);
    }

    if (typeof key === 'object' && key.length != 0) {
        return robotCache.mget(key);
    }
};

module.exports = {
    setKV,
    getKV,
    deleteKV,
    runDB,
    setMemory,
    getMemory,
    deleteMemory,
    runMemory,
    setCache,
    getCache
};