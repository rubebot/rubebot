/**
 * @module DataInit
 * @author Rube
 * @date 15/11/20
 * @desc data init
 */

'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _commonBucketApi = require('../common/bucketApi');

var bucketApi = _interopRequireWildcard(_commonBucketApi);

module.exports = function (next) {

  var bucket = require('../bucket');

  var sql = '\n    CREATE TABLE "kv" (\n\t "key" text NOT NULL,\n\t "value" text NOT NULL,\n\t "time" text NOT NULL,\n\t "special" text,\n\tPRIMARY KEY("key")\n    );\n    ';
  bucket.runMemory(sql);
  next();
};