"use strict";

exports.__esModule = true;
exports.default = ValueWithMeta;
function ValueWithMeta(value, meta) {
    return Object.assign(this, { value: value, meta: meta });
}