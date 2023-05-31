const { expect } = require("chai");
const config = require("../hardhat.config.js");
let accounts = config.networks.testnet.accounts;

//Test Function 1 - write contract with long string, await contract deployment, check if string matches on the contract with the local string, then deploy the contract - TO DO
describe("Test1. Deploy contract with given string. Compare deployed contract string contents with initial string. Change string. Compare again", function () {
  it("Should return the new string once it's changed", async function () {
    
    const Greeter = await ethers.getContractFactory("JRPC_1");

    console.log("--------------------------------------\nDeploying smart contract with data string....");
    const greeter = await Greeter.deploy("Q)q%Q,$MV?Wz&Q)jfEQ_Ku#hjzghyJt!!(wah(avp(=R:*!RY8[:(4WRidbq[8+)eNe:h+rug5t7/cNNCm*zRL+(TbAd}k,Guu]g=]4!%GqnB9U$hz_B?ep@hR+6q5_xt8yzETYDJcc4mNJ+J93Vt!HZV_TcZ&:!_9[(uM{GVD-mHSJdZiL}LXYVrU+u;UuMb@Gz+[-ZgH8X,*Vw8__]t,&RKJQ!RZibFikGS]hwgcH/HBCPW75$waR;rj}6[:9tFUzH=N%+vadbWNmZ/Zc/Y+zHw=:T3V3%MSg!k%,}X%(3vc}WBC85uUau#:B_T?w;(HL!_R!!cf,wnWc?,-ZAMBNd9AMVEhaV_%x]Sjn$w*bUa7WkA99n@A.x]M}+QGV_Sm/HSG3!FY;Nw5NF@}BCv}S&JqruUzESetkU)kb,.fu?)%Z&jdLu/udL6jGv?[!Vz6vhu2+#{ee*8;BU$E&){T@v+J_hw_b_Smm(N5kK@GGa82avr]KWLmtc/q9:LP$SX-@7VP]V/;/H=]Dr$a[gaG,U%}S_qaVa+M.cJr@_J4Q(vxDg+7Cuqb4+K&=WpGWcnF5zXJU@7dSP%=6b7cL6GRcJzzgGm%h&?fCHjdDBST8yTGX+u;&Hu9nQD?z(-mXm24=V{)%a_Wthh$bm}SgZ!z[:XASd-n4Tv5Lcu&djS3.;L]Vpd5([f7Tzrp?6b4TH&iywYuU:,??)(V!(y4TC;G$b6V8XgT(q}3*F:*g@j}C*ijtmQtp(ycC6%Av98kCnJ,U6k%!qGc)de7F?8_GcTy5h3/yR6Lu=qyrb+EEA&-9mZL}.9Sv,bLn-zb/Xy?7H75f64ngWC:{xrzkCbF?hD!ed3CJ,N(VZBpua:=$T7#{SCGE9w5J3a;KUS=Uc5/Ptr*G5Hb/c8Sp]j;g(v3JPv4ciPwYV7_Bg5j%wAkT8iyB!-8v}Shg%g*Uy4LAK?Ng_LqD*Pg]:L}tK![@%aaw@L4tyt,pqN8L$LC),A9re");

    console.log("--------------------------------------\nContents of deployed smart contract:");
    console.log(await greeter.greet());

    console.log("--------------------------------------\nCompairing values of Smart Contract contents to input variable.");
    expect(await greeter.greet()).to.equal("Q)q%Q,$MV?Wz&Q)jfEQ_Ku#hjzghyJt!!(wah(avp(=R:*!RY8[:(4WRidbq[8+)eNe:h+rug5t7/cNNCm*zRL+(TbAd}k,Guu]g=]4!%GqnB9U$hz_B?ep@hR+6q5_xt8yzETYDJcc4mNJ+J93Vt!HZV_TcZ&:!_9[(uM{GVD-mHSJdZiL}LXYVrU+u;UuMb@Gz+[-ZgH8X,*Vw8__]t,&RKJQ!RZibFikGS]hwgcH/HBCPW75$waR;rj}6[:9tFUzH=N%+vadbWNmZ/Zc/Y+zHw=:T3V3%MSg!k%,}X%(3vc}WBC85uUau#:B_T?w;(HL!_R!!cf,wnWc?,-ZAMBNd9AMVEhaV_%x]Sjn$w*bUa7WkA99n@A.x]M}+QGV_Sm/HSG3!FY;Nw5NF@}BCv}S&JqruUzESetkU)kb,.fu?)%Z&jdLu/udL6jGv?[!Vz6vhu2+#{ee*8;BU$E&){T@v+J_hw_b_Smm(N5kK@GGa82avr]KWLmtc/q9:LP$SX-@7VP]V/;/H=]Dr$a[gaG,U%}S_qaVa+M.cJr@_J4Q(vxDg+7Cuqb4+K&=WpGWcnF5zXJU@7dSP%=6b7cL6GRcJzzgGm%h&?fCHjdDBST8yTGX+u;&Hu9nQD?z(-mXm24=V{)%a_Wthh$bm}SgZ!z[:XASd-n4Tv5Lcu&djS3.;L]Vpd5([f7Tzrp?6b4TH&iywYuU:,??)(V!(y4TC;G$b6V8XgT(q}3*F:*g@j}C*ijtmQtp(ycC6%Av98kCnJ,U6k%!qGc)de7F?8_GcTy5h3/yR6Lu=qyrb+EEA&-9mZL}.9Sv,bLn-zb/Xy?7H75f64ngWC:{xrzkCbF?hD!ed3CJ,N(VZBpua:=$T7#{SCGE9w5J3a;KUS=Uc5/Ptr*G5Hb/c8Sp]j;g(v3JPv4ciPwYV7_Bg5j%wAkT8iyB!-8v}Shg%g*Uy4LAK?Ng_LqD*Pg]:L}tK![@%aaw@L4tyt,pqN8L$LC),A9re");

    console.log("--------------------------------------\nModifying smart contract");
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    console.log("--------------------------------------\nContents of smart contract after modification");
    console.log(await greeter.greet());

    console.log("--------------------------------------\nChecking if transaction is mined");
    await setGreetingTx.wait();

    console.log("--------------------------------------\nChecking if the contract updated correctly");
    expect(await greeter.greet()).to.equal("Hola, mundo!");

    console.log("--------------------------------------\n**********************************\nEnd of Test");
  });
});


//Test Function 2 - write contract with uint8array, await contract deployment, check if uint8array matches on the contract with the local uint8array, then deploy the contract - TO DO
describe("Test 2. Read string, put it in uint8array, deploy, return and compare arrays", function () {
  it("Should return the new uint8array once it's changed", async function () {
    
    console.log("--------------------------------------\nread in long string");
    const longString = "Q)q%Q,$MV?Wz&Q)jfEQ_Ku#hjzghyJt!!(wah(avp(=R:*!RY8[:(4WRidbq[8+)eNe:h+rug5t7/cNNCm*zRL+(TbAd}k,Guu]g=]4!%GqnB9U$hz_B?ep@hR+6q5_xt8yzETYDJcc4mNJ+J93Vt!HZV_TcZ&:!_9[(uM{GVD-mHSJdZiL}LXYVrU+u;UuMb@Gz+[-ZgH8X,*Vw8__]t,&RKJQ!RZibFikGS]hwgcH/HBCPW75$waR;rj}6[:9tFUzH=N%+vadbWNmZ/Zc/Y+zHw=:T3V3%MSg!k%,}X%(3vc}WBC85uUau#:B_T?w;(HL!_R!!cf,wnWc?,-ZAMBNd9AMVEhaV_%x]Sjn$w*bUa7WkA99n@A.x]M}+QGV_Sm/HSG3!FY;Nw5NF@}BCv}S&JqruUzESetkU)kb,.fu?)%Z&jdLu/udL6jGv?[!Vz6vhu2+#{ee*8;BU$E&){T@v+J_hw_b_Smm(N5kK@GGa82avr]KWLmtc/q9:LP$SX-@7VP]V/;/H=]Dr$a[gaG,U%}S_qaVa+M.cJr@_J4Q(vxDg+7Cuqb4+K&=WpGWcnF5zXJU@7dSP%=6b7cL6GRcJzzgGm%h&?fCHjdDBST8yTGX+u;&Hu9nQD?z(-mXm24=V{)%a_Wthh$bm}SgZ!z[:XASd-n4Tv5Lcu&djS3.;L]Vpd5([f7Tzrp?6b4TH&iywYuU:,??)(V!(y4TC;G$b6V8XgT(q}3*F:*g@j}C*ijtmQtp(ycC6%Av98kCnJ,U6k%!qGc)de7F?8_GcTy5h3/yR6Lu=qyrb+EEA&-9mZL}.9Sv,bLn-zb/Xy?7H75f64ngWC:{xrzkCbF?hD!ed3CJ,N(VZBpua:=$T7#{SCGE9w5J3a;KUS=Uc5/Ptr*G5Hb/c8Sp]j;g(v3JPv4ciPwYV7_Bg5j%wAkT8iyB!-8v}Shg%g*Uy4LAK?Ng_LqD*Pg]:L}tK![@%aaw@L4tyt,pqN8L$LC),A9re";

    console.log("--------------------------------------\nUint8Array of size 255. Anything past this size fails to deploy.");
    let arraySlice = new Uint8Array(255)
    let dataUINT8Array = new TextEncoder().encode(longString);
    arraySlice.forEach(function(NULL, index, array) {
      array[index] = dataUINT8Array[index];
    })
    console.log(arraySlice);

    console.log("--------------------------------------\nCompiling smart contract....");
    const Greeter = await ethers.getContractFactory("JRPC_2");   

    console.log("--------------------------------------\nDeploying smart contract....");
    const greeter = await Greeter.deploy(arraySlice);

    // console.log("--------------------------------------\nContents of smart contract:");
    // console.log(greeter);

    console.log("--------------------------------------\nContents of deployed array:");
    var returnedArray = await greeter.greet();
    console.log(returnedArray);

    console.log("--------------------------------------\nCheck if the deployed uint8array is the same as the one passed to the contract");
 
    function isEqual(a, b)
    {
      console.log("--------------------------------------\noriginal Array: " + a);
      console.log("--------------------------------------\nDeployed Array: " + b);
      return a.join() == b.join();
    }
    expect(isEqual(arraySlice, new Uint8Array(returnedArray)));

    let UpdateArray = new Uint8Array([1,2,3]);

    console.log("--------------------------------------\nUpdating array in Smart Contract");
    const setGreetingTx = await greeter.setGreeting(UpdateArray);
    
    console.log("--------------------------------------\nChecking if transaction is mined");
    await setGreetingTx.wait();
    
    var returnedArray = await greeter.greet();

   console.log("--------------------------------------\nChecking if the contract updated correctly");
    expect(isEqual(UpdateArray, new Uint8Array(returnedArray)));
    console.log("--------------------------------------\n**********************************\nEnd of Test");
  });
});

//Test Function 3 - write a contract call to transfer ERC-20 tokens from one account to another, await confirmation of transaction, check if the balance of the two accounts has changed
describe("Test 3. Transfer ERC-20 tokens from one account to another", function () {
  it("Should transfer the tokens, and check account balances after transaction", async function () {
    const sender = new ethers.Wallet(accounts[0], ethers.provider);
    const receiver = new ethers.Wallet(accounts[1], ethers.provider);
    console.log("--------------------------------------\nSender address: " + sender.address);
    console.log("--------------------------------------\nReceiver address: " + receiver.address);

    console.log("--------------------------------------\nCompiling smart contract....");
    const MyToken = await ethers.getContractFactory("JRPC_3");

    console.log("--------------------------------------\nConnecting the signer to the contract factory....");
    const connectedFactory = MyToken.connect(sender);

    console.log("--------------------------------------\nDeploying smart contract....");
    const myToken = await connectedFactory.deploy();

    console.log("--------------------------------------\nWaiting for contract to be deployed....");
    await myToken.deployed();

    // console.log("--------------------------------------\nContents of smart contract:");
    // console.log(myToken);
    
    const initialSenderBalance = await myToken.balanceOf(sender.address);
    const initialReceiverBalance = await myToken.balanceOf(receiver.address);
    console.log("--------------------------------------\nInitial balances of two accounts: \ninitial sender balance: " + initialSenderBalance + "\ninitial receiver balance: " + initialReceiverBalance);

    const amount = 10000;

    console.log("--------------------------------------\napproving the smart contract to send tokens....");
    await myToken.approve(sender.address, 10000);

    console.log("--------------------------------------\nTransfering tokens from the sender to the receiver....");
    await myToken.transfer(receiver.address, 10000);
    
    const finalSenderBalance = await myToken.balanceOf(sender.address);
    const finalReceiverBalance = await myToken.balanceOf(receiver.address);
    console.log("--------------------------------------\nUpdated balances of two accounts: \nfinal sender balance: " + finalSenderBalance + "\nfinal receiver balance: " + finalReceiverBalance);

    console.log("--------------------------------------\nchecking if the balances updated correctly....");
    expect(finalSenderBalance.toString()).to.equal((BigInt(initialSenderBalance.toString()) - BigInt(amount.toString())).toString());
    expect(finalReceiverBalance.toString()).to.equal((BigInt(initialReceiverBalance.toString()) + BigInt(amount.toString())).toString());
    console.log("--------------------------------------\n**********************************\nEnd of Test");
  });
});

//Test Function 4 - write a contract call to transfer ERC-20 tokens from one account to another, await confirmation of transaction, check if the balance of the two accounts has changed - TO DO
describe("Test 4. Transfer ERC-20 tokens from one account to another using a Solidity smart contract testTransaction function", function () {
  it("Should transfer ERC-20 JRPC_3 smart contract tokens from account1 to account2 using a Solidity testTransaction function", async function () {
    const sender = new ethers.Wallet(accounts[0], ethers.provider);
    const receiver = new ethers.Wallet(accounts[1], ethers.provider);
    console.log("--------------------------------------\nSender address: " + sender.address + "\nReceiver address: " + receiver.address);

    console.log("--------------------------------------\nCompiling the smart contract of the token to be sent....");
    const MyToken = await ethers.getContractFactory("JRPC_3");

    console.log("--------------------------------------\nConnecting the signer to the contract factory....");
    const connectedFactory = MyToken.connect(sender);
  
    console.log("--------------------------------------\nDeploying the smart contract of the token to be sent....");
    const myToken = await connectedFactory.deploy();

    // console.log("--------------------------------------\nContents of the smart contract:");
    // console.log(myToken);

    console.log("--------------------------------------\nCompiling the smart contract that will send the tokens....");
    MyOtherToken = await ethers.getContractFactory("JRPC_4");

    console.log("--------------------------------------\nConnecting the signer to the other contract factory....");
    const connectedFactory2 = MyOtherToken.connect(receiver);

    console.log("--------------------------------------\nDeploying the smart contract that will send the token....");
    const myOtherToken = await connectedFactory2.deploy(myToken.address, sender.address, receiver.address);

    console.log("--------------------------------------\nWaiting for contract to be deployed....");
    await myOtherToken.deployed();

    // console.log("--------------------------------------\nContents of the smart contract:");
    // console.log(myOtherToken);

    const initialSenderBalance = await myToken.balanceOf(sender.address);
    const initialReceiverBalance = await myToken.balanceOf(receiver.address);
    console.log("--------------------------------------\nInitial balances of two accounts: \ninitial sender balance: " + initialSenderBalance + "\ninitial receiver balance: " + initialReceiverBalance);

    const amount = 100;

    console.log("--------------------------------------\napproving the smart contract to send tokens....");
    await myToken.approve(sender.address, 100);

    console.log("--------------------------------------\nTransfering tokens from the sender to the receiver via in-built open zeppeling ERC-20 Solidity function....");
    await myToken.transfer(receiver.address, amount);

    const SenderBalance = await myToken.balanceOf(sender.address);
    const ReceiverBalance = await myToken.balanceOf(receiver.address);
    console.log("--------------------------------------\nUpdated balances of two accounts: \nfinal sender balance: " + SenderBalance + "\nfinal receiver balance: " + ReceiverBalance);

    console.log("--------------------------------------\nchecking if the balances updated correctly....");
    expect(SenderBalance.toString()).to.equal((BigInt(initialSenderBalance.toString()) - BigInt(amount.toString())).toString());
    expect(ReceiverBalance.toString()).to.equal((BigInt(initialReceiverBalance.toString()) + BigInt(amount.toString())).toString());

    console.log("--------------------------------------\napproving the smart contract to send tokens on behalf of the sender....");
    await myToken.connect(receiver).approve(myOtherToken.address, 1000);

    console.log("--------------------------------------\nTransfering tokens from the sender to the receiver via Solidity testTransaction function....");
    await myOtherToken.testTransfer();

    const finalSenderBalance = await myToken.balanceOf(sender.address);
    const finalReceiverBalance = await myToken.balanceOf(receiver.address);
    console.log("--------------------------------------\nUpdated balances of two accounts: \nfinal sender balance: " + finalSenderBalance + "\nfinal receiver balance: " + finalReceiverBalance);

    console.log("--------------------------------------\nchecking if the balances updated correctly....");
    expect(finalSenderBalance.toString()).to.equal(BigInt(initialSenderBalance.toString()));
    expect(finalReceiverBalance.toString()).to.equal(BigInt(initialReceiverBalance.toString()));
    console.log("--------------------------------------\n**********************************\nEnd of Test");
  });
});