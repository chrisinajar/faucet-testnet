var test = require('tape');
var isFunction = require('is-function');
var proxyquire = require('proxyquire');

test('testnet-faucet', function (t) {
  t.plan(15);

  var faucet = proxyquire('./', {
    'xhr-request': request
  });

  faucet('wallet', 1, function (err, data) {
    t.notOk(err);
    t.ok(data, 'callback receives data');
  });
  faucet('wallet', function (err, data) {
    t.notOk(err);
    t.ok(data, 'callback receives data');
  });
  faucet('wallet', 'butts', function (err, data) {
    t.notOk(err);
    t.ok(data, 'callback receives data');
  });

  function request (url, options, cb) {
    t.equal(url, 'https://testnet-faucet.elementsproject.org/send', 'Calls elements project faucet');
    t.deepEqual(options.query, {
      address: 'wallet',
      amount: 1
    });
    t.ok(isFunction(cb), 'callback is always a function');
    cb(null, true);
  }
});
