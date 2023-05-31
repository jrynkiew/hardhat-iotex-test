const { expect } = require("chai");
const config = require("../hardhat.config.js");
let accounts = config.networks.testnet.accounts;

//Test Function 1 - write a contract call to transfer ERC-20 tokens from one account to another, await confirmation of transaction, check if the balance of the two accounts has changed
describe("Test 1. Transfer ERC-20 tokens from one account to another", function () {
  it("Should transfer the tokens, and check account balances after transaction", async function () {
    const sender = new ethers.Wallet(accounts[0], ethers.provider);
    const receiver = new ethers.Wallet(accounts[1], ethers.provider);
    console.log("Sender address: " + sender.address);
    console.log("Receiver address: " + receiver.address);

    console.log("Compiling smart contract....");
    const MyToken = await ethers.getContractFactory("test");

    console.log("Connecting the signer to the contract factory....");
    const connectedFactory = MyToken.connect(sender);

    console.log("Deploying smart contract....");
    const myToken = await connectedFactory.deploy();

    console.log("Waiting for contract to be deployed....");
    await myToken.deployed();

    // console.log("Contents of smart contract:");
    // console.log(myToken);
    
    const initialSenderBalance = await myToken.balanceOf(sender.address);
    const initialReceiverBalance = await myToken.balanceOf(receiver.address);
    console.log("Initial balances of two accounts: \ninitial sender balance: " + initialSenderBalance + "\ninitial receiver balance: " + initialReceiverBalance);

    const amount = 10000;

    console.log("Transfering tokens from the sender to the receiver....");
    await myToken.transfer(receiver.address, 10000);
    
    const finalSenderBalance = await myToken.balanceOf(sender.address);
    const finalReceiverBalance = await myToken.balanceOf(receiver.address);
    console.log("Updated balances of two accounts: \nfinal sender balance: " + finalSenderBalance + "\nfinal receiver balance: " + finalReceiverBalance);

    console.log("checking if the balances updated correctly....");
    expect(finalSenderBalance.toString()).to.equal((BigInt(initialSenderBalance.toString()) - BigInt(amount.toString())).toString());
    expect(finalReceiverBalance.toString()).to.equal((BigInt(initialReceiverBalance.toString()) + BigInt(amount.toString())).toString());
    console.log("**********************************\nEnd of Test");
  });
});