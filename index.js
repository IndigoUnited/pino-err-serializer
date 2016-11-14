'use strict';

function errSerializer(err) {
    return Object.assign({}, err, {
        type: err.constructor.name,
        message: err.message,
        stack: err.stack,
    });
}

module.exports = errSerializer;
