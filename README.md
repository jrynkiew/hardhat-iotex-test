# Introduction
This is a test written in javascript for Hardhat test suite for web3 Ethereum contracts. I expected these to work on IoTeX, but they don't. Please help debug.

## Tech stack:
Node v14.17.5
NPM 6.14.14
Windows 11

## Instructions

Edit the hardhat.config.js file, and change the lines:

```
const TestPrivateKey1 = "YOUR PRIVATE KEY HERE - make sure to have some testnet tokens in this account";
const TestPrivateKey2 = "YOUR PRIVATE KEY HERE - make sure to have some testnet tokens in this account";
```

with your testnet private keys. Make sure to have some testnet tokens in these accounts.

`npm install`
`npx hardhat test`
`npx hardhat test --network testnet`

## Description of the issue

`npx hardhat test` command will succeed.

```
PS> npx hardhat test

  Test 1. Transfer ERC-20 tokens from one account to another
Sender address: 0xE3c84E9c2AA67c4f312609fa26B262F21A98194C
Receiver address: 0x9A077e984074Ec16Ef181534CA906ada2F55579B
Compiling smart contract....
Connecting the signer to the contract factory....
Deploying smart contract....
Waiting for contract to be deployed....
Initial balances of two accounts:
initial sender balance: 1000000000000000000000000
initial receiver balance: 0
Transfering tokens from the sender to the receiver....
Updated balances of two accounts:
final sender balance: 999999999999999999990000
final receiver balance: 10000
checking if the balances updated correctly....
**********************************
End of Test
    ✔ Should transfer the tokens, and check account balances after transaction (1106ms)


  1 passing (1s)
```

`npx hardhat test --network testnet` will fail

```
PS> npx hardhat test --network testnet

  Test 1. Transfer ERC-20 tokens from one account to another
Sender address: 0xE3c84E9c2AA67c4f312609fa26B262F21A98194C
Receiver address: 0x9A077e984074Ec16Ef181534CA906ada2F55579B
Compiling smart contract....
Connecting the signer to the contract factory....
Deploying smart contract....
Waiting for contract to be deployed....
    1) Should transfer the tokens, and check account balances after transaction


  0 passing (14s)
  1 failing

  1) Test 1. Transfer ERC-20 tokens from one account to another
       Should transfer the tokens, and check account balances after transaction:
     Error: invalid hex string (argument="value", value="-0x0d9da0", code=INVALID_ARGUMENT, version=bytes/5.7.0)
      at Logger.makeError (node_modules\@ethersproject\logger\src.ts\index.ts:269:28)
      at Logger.throwError (node_modules\@ethersproject\logger\src.ts\index.ts:281:20)
      at Logger.throwArgumentError (node_modules\@ethersproject\logger\src.ts\index.ts:285:21)
      at hexStripZeros (node_modules\@ethersproject\bytes\src.ts\index.ts:307:16)
      at hexValue (node_modules\@ethersproject\bytes\src.ts\index.ts:298:21)
      at C:\Users\jrynk\Code\hardhat-test\node_modules\@ethersproject\providers\src.ts\json-rpc-provider.ts:726:35
      at Array.forEach (<anonymous>)
      at JsonRpcProvider.hexlifyTransaction (node_modules\@ethersproject\providers\src.ts\json-rpc-provider.ts:724:111)
      at EthersProviderWrapper.JsonRpcProvider.prepareRequest (node_modules\@ethersproject\providers\src.ts\json-rpc-provider.ts:594:40)
      at EthersProviderWrapper.<anonymous> (node_modules\@ethersproject\providers\src.ts\json-rpc-provider.ts:634:27)
```

Please explain why this happens.