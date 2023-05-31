// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // Import the IERC20 interface from OpenZeppelin

contract JRPC_4 {
    IERC20 public token; // Instance of the ERC20 token contract
    address public account1; // Sender account
    address public account2; // Receiver account

    uint256 public transferAmount = 100; // Amount of tokens to transfer

    constructor(address _token, address _account2, address _account1) {
        token = IERC20(_token);
        account1 = _account1;
        account2 = _account2;
    }

    function testTransfer() public {
        // Get the initial balances of the accounts
        uint256 initialBalance1 = token.balanceOf(account1);
        uint256 initialBalance2 = token.balanceOf(account2);

        // Perform the token transfer
        token.transferFrom(account1, account2, transferAmount);

        // Get the final balances of the accounts
        uint256 finalBalance1 = token.balanceOf(account1);
        uint256 finalBalance2 = token.balanceOf(account2);

        // Verify the transfer was successful
        assert(finalBalance1 == initialBalance1 - transferAmount);
        assert(finalBalance2 == initialBalance2 + transferAmount);

        console.log("**********************************");
        console.log("Message from Solidity smart contract");
        console.log("Transfer successful!");
        console.log("Account 1 balance before: %s", initialBalance1);
        console.log("Account 1 balance after: %s", finalBalance1);
        console.log("Account 2 balance before: %s", initialBalance2);
        console.log("Account 2 balance after: %s", finalBalance2);
    }
}

