const { equal } = require('assert');
const mod = require('./index');

equal(mod.sync(10), 110);
equal(mod.fibonacci(10), 55);