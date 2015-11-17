/**
 * @module Bucket
 * @author Rube
 * @date 15/11/17
 * @desc save runtime data
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _nodejieba = require('nodejieba');

var _nodejieba2 = _interopRequireDefault(_nodejieba);

/** nodejieba init**/
var welcome = 'hello rubebot';
_nodejieba2['default'].tag(welcome);
_nodejieba2['default'].extract(welcome, 4);

var sqlite3 = require('sqlite3').verbose();

var memory = new sqlite3.Database(':memory:');
var db = new sqlite3.Database('./datas/data.sqlite');
var NodeCache = require("node-cache");
var robotCache = new NodeCache();

var setKV = function setKV(datas, op, cb) {

    var callback = typeof op == 'function' ? op : cb;
    var options = typeof op == 'function' ? null : op;

    var sql = null;

    (function () {
        var key = datas.key;
        var value = datas.value;
        if (datas.special) {
            sql = 'REPLACE INTO kv (key, value, special, time) VALUES (\'' + key + '\', \'' + value + '\', \'' + datas.special + '\', \'' + Date.now() + '\')';
        } else {
            sql = 'REPLACE INTO kv (key, value, time) VALUES (\'' + key + '\', \'' + value + '\', \'' + Date.now() + '\')';
        }
    })();

    if (options && options.memory) {
        return memory.exec(sql, callback);
    }
    return db.exec(sql, callback);
};

var deleteKV = function deleteKV(datas, op, cb) {

    var callback = typeof op == 'function' ? op : cb;
    var options = typeof op == 'function' ? null : op;
    var key = typeof datas == 'string' ? datas : datas.key;

    var sql = 'DELETE FROM kv WHERE key LIKE \'' + key;
    if (options && options.memory) {
        return memory.run(sql, callback);
    }
    return db.run(sql, callback);
};

var getKV = function getKV(datas, op, cb) {

    var callback = typeof op == 'function' ? op : cb;
    var options = typeof op == 'function' ? null : op;
    var key = typeof datas == 'string' ? datas : datas.key;

    var sql = 'SELECT * FROM kv WHERE key LIKE \'' + key + '\'';

    if (options && options.memory) {
        return memory.all(sql, callback);
    }
    return db.all(sql, callback);
};

var setMemory = function setMemory(datas, op, cb) {

    return typeof op == 'function' ? setKV(datas, { memory: true }, op) : setKV(datas, Object.assign({ memory: true }, op), cb);
};

var getMemory = function getMemory(datas, op, cb) {

    return typeof op == 'function' ? getKV(datas, { memory: true }, op) : getKV(datas, Object.assign({ memory: true }, op), cb);
};

var deleteMemory = function deleteMemory(datas, op, cb) {

    return typeof op == 'function' ? deleteKV(datas, { memory: true }, op) : deleteKV(datas, Object.assign({ memory: true }, op), cb);
};

var runMemory = function runMemory(sql) {

    return memory.run(sql);
};

var runDB = function runDB(sql) {

    return memory.run(sql);
};

var setCache = function setCache(key, value, options) {

    return robotCache.set(key, value, options);
};

var getCache = function getCache(key) {

    if (typeof key === 'string') {
        return robotCache.get(key);
    }

    if (typeof key === 'object' && key.length != 0) {
        return robotCache.mget(key);
    }
};

module.exports = {
    setKV: setKV,
    getKV: getKV,
    deleteKV: deleteKV,
    runDB: runDB,
    setMemory: setMemory,
    getMemory: getMemory,
    deleteMemory: deleteMemory,
    runMemory: runMemory,
    setCache: setCache,
    getCache: getCache
};