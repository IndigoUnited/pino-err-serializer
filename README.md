# pino-err-serializer

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/pino-err-serializer
[downloads-image]:http://img.shields.io/npm/dm/pino-err-serializer.svg
[npm-image]:http://img.shields.io/npm/v/pino-err-serializer.svg
[travis-url]:https://travis-ci.org/IndigoUnited/pino-err-serializer
[travis-image]:http://img.shields.io/travis/IndigoUnited/pino-err-serializer/master.svg
[coveralls-url]:https://coveralls.io/r/IndigoUnited/pino-err-serializer
[coveralls-image]:https://img.shields.io/coveralls/IndigoUnited/pino-err-serializer/master.svg
[david-dm-url]:https://david-dm.org/IndigoUnited/pino-err-serializer
[david-dm-image]:https://img.shields.io/david/IndigoUnited/pino-err-serializer.svg
[david-dm-dev-url]:https://david-dm.org/IndigoUnited/pino-err-serializer#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/IndigoUnited/pino-err-serializer.svg

An improved error serializer that not only logs the error type, message and stack but also other properties set on the error object.


## Installation

`$ npm install pino-err-serializer`


### Usage

```js
const pino = require('pino');
const errSerializer = require('pino-err-serializer');

const logger = pino({
    serializers: {
        err: errSerializer,
    },
});

logger.info({
    err: Object.assign(new Error('Some error'), { this: 'will be serialized' })
}, 'An error occurred!');
```


## Tests

`$ npm test`   
`$ npm test-cov` to get coverage report


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
