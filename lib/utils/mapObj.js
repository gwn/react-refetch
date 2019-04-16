"use strict";

exports.__esModule = true;
exports.default = mapObj;
function mapObj(obj, mapFn) {
  return Object.keys(obj).reduce(function (finalObj, key) {
    var _Object$assign;

    return Object.assign({}, finalObj, (_Object$assign = {}, _Object$assign[key] = mapFn(obj[key], key), _Object$assign));
  }, {});
}