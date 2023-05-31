require("@nomicfoundation/hardhat-chai-matchers");

const TestPrivateKey1 = "YOUR PRIVATE KEY HERE - make sure to have some testnet tokens in this account";
const TestPrivateKey2 = "YOUR PRIVATE KEY HERE - make sure to have some testnet tokens in this account";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      // Configure the default Hardhat network
      chainId: 1337, 
      accounts: [
        {
          privateKey: TestPrivateKey1,
          balance: '10000000000000000000000',
        },
        {
          privateKey: TestPrivateKey2,
          balance: '10000000000000000000000',
        },
      ],
    },
    testnet: {
      url: "https://babel-api.testnet.iotex.io",
      accounts: [TestPrivateKey1, TestPrivateKey2],
      chainId: 4690,
      gas: 85000,
      gasPrice: 1000000000000
    }
  },
  mocha: {
    timeout: 1000000 
  }
};
