// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract String {
    function compare(
        string memory a,
        string memory b
    ) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }
}
