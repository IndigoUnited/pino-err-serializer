'use strict';

const expect = require('chai').expect;
const isPlainObject = require('lodash.isplainobject');
const errSerializer = require('../');

it('should serializer err with any additional properties set on the error object', () => {
    const err = Object.assign(new Error('foo'), { foo: 'bar' });
    const serializedErr = errSerializer(err);

    expect(isPlainObject(serializedErr)).to.equal(true);
    expect(serializedErr.type).to.equal('Error');
    expect(serializedErr.message).to.equal('foo');
    expect(serializedErr.stack).to.be.a('string');
    expect(serializedErr.foo).to.equal('bar');
});

it('should keep error type, even if type exists as a prop', () => {
    const err = Object.assign(new Error('foo'), { type: 'bar' });
    const serializedErr = errSerializer(err);

    expect(serializedErr.type).to.equal('Error');
});

it('should preset type, message and stack as first properties', () => {
    const err = Object.assign(new Error('foo'), { foo: 'bar' });
    const serializedErr = errSerializer(err);

    expect(Object.keys(serializedErr)).to.eql(['type', 'message', 'stack', 'foo']);
});
