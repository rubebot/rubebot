/**
 * @module DataInit
 * @author Rube
 * @date 15/11/20
 * @desc data init
 */

import * as bucketApi from '../common/bucketApi';

module.exports = (next)=> {

    let bucket = require('../bucket');

    let sql = `
    CREATE TABLE "kv" (
	 "key" text NOT NULL,
	 "value" text NOT NULL,
	 "time" text NOT NULL,
	 "special" text,
	PRIMARY KEY("key")
    );
    `;
    bucket.runMemory(sql);
    next();
};