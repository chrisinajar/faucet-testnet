# Faucet: Testnet
A working testnet faucet for use in node or browsers. This uses the [Elements Project testnet faucet](https://testnet-faucet.elementsproject.org) to fill requests.

## Installation
`npm install faucet-testnet`

## Usage
```js
var faucet = require('faucet-testnet');

faucet('mo3sfGw5CegQn2BvN5arjq1m6k3BaAWdY8', 0.5, function (err, data) {
  // 0 confirmations, but the bits are there
});
```

# Contributing
`npm run test`

# License
MIT
