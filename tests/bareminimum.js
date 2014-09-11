var assert = require('assert');
var fortuneSource = require('../lib/fortune');

var text = fortuneSource.fortune();

assert.equal(typeof text, 'string', 'fortune() did not return a string.');
assert.ok(text.length > 0, 'fortune() returned an empty string');
