var request = require('xhr-request');
var isFunction = require('is-function');
var isNumber = require('is-number');

var SEND_URL = 'https://testnet-faucet.elementsproject.org/send';
var calledTwice = false;

module.exports = fillTestnetWallet;

function fillTestnetWallet (wallet, amount, cb) {
  if (isFunction(amount)) {
    cb = amount;
    amount = 1;
  }
  amount = Number(amount);
  if (!isNumber(amount) || amount <= 0) {
    amount = 1;
  }
  if (!isFunction(cb)) {
    cb = noop;
  }

  if (calledTwice) {
    console.warn('Do not abuse testnet faucets, testnet coins are not worth real money');
    console.warn('If they gain any value then they are no longer useful for testing, and therefore lose their value.');
    console.warn('Don\'t be a dick.');
  }
  calledTwice = true;

  request(SEND_URL, {
    json: true,
    query: {
      address: wallet,
      amount: amount
    }
  }, cb);
}

function noop () { }
