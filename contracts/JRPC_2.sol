//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract JRPC_2 {
    // string private greeting;
    uint8[255] greeting;

    // constructor(uint8[] memory _greeting) {
    //     //console.log("Deploying a Greeter with greeting:", _greeting);
    //     greeting = _greeting;
    // }
     constructor(bytes memory input) {
        //console.log("Deploying a Greeter with greeting:", _greeting);
        uint8[255] memory result;
        for (uint8 i=0; i<input.length; i++) {
            result[i] = uint8(input[i]);
        }
        greeting = result;
    }

    // constructor(string memory _greeting) {
    //     console.log("Deploying a Greeter with greeting:", _greeting);
    //     greeting = _greeting;
    // }

    function greet() public view returns (uint8[255] memory) {
        return greeting;
    }

    function setGreeting(bytes memory input) public {
        // console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        uint8[255] memory result;
        for (uint8 i=0; i<input.length; i++) {
            result[i] = uint8(input[i]);
        }
        greeting = result;
    }
}