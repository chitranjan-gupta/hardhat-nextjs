// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DigitalIdentity {
    struct Identity {
        address owner;
        string name;
        uint age;
        string educationalInstitution;
    }
    
    mapping(address => Identity) identities;

    function createIdentity(
        address _address,
        string memory _name,
        uint _age,
        string memory _educationalInstitution
    ) public {
        require(identities[_address].owner == address(0));
        identities[_address].owner = msg.sender;
        identities[_address].name = _name;
        identities[_address].age = _age;
        identities[_address].educationalInstitution = _educationalInstitution;
    }

    function updateIdentity(
        address _address,
        string memory _name,
        uint _age,
        string memory _educationalInstitution
    ) public {
        require(identities[_address].owner == msg.sender);
        identities[_address].name = _name;
        identities[_address].age = _age;
        identities[_address].educationalInstitution = _educationalInstitution;
    }

    function getIdentity(
        address _address
    ) public view returns (address, string memory, uint, string memory) {
        return (
            identities[_address].owner,
            identities[_address].name,
            identities[_address].age,
            identities[_address].educationalInstitution
        );
    }
}
