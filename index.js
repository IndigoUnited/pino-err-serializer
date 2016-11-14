'use strict';

const assignWith = require('lodash.assignwith');

function assignWithCostumizer(objValue, srcValue) {
    return objValue === undefined ? srcValue : objValue;
}

function errSerializer(err) {
    return assignWith({}, {
        type: err.constructor.name,
        message: err.message,
        stack: err.stack,
    }, err, assignWithCostumizer);
}

module.exports = errSerializer;
