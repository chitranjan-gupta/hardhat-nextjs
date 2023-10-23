// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./String.sol";
import "./Identity.sol";

contract DigitalWallet {
    DigitalIdentity digitalIdentity;

    struct Credential {
        string name;
        string educationalInstitution;
        string degree;
        string fieldOfStudy;
        uint graduationYear;
    }

    mapping(address => mapping(string => Credential)) credentials;

    constructor(address _digitalIdentity) {
        digitalIdentity = DigitalIdentity(_digitalIdentity);
    }

    function addCredential(
        address _address,
        string memory _name,
        string memory _educationalInstitution,
        string memory _degree,
        string memory _fieldOfStudy,
        uint _graduationYear
    ) public {
        (
            address identityOwner,
            string memory identityName,
            uint identityAge,
            string memory identityEducationalInstitution
        ) = digitalIdentity.getIdentity(_address);
        String t;
        require(
            t.compare(identityName, _name) &&
                t.compare(
                    identityEducationalInstitution,
                    _educationalInstitution
                )
        );
        credentials[_address][_degree] = Credential(
            _name,
            _educationalInstitution,
            _degree,
            _fieldOfStudy,
            _graduationYear
        );
    }

    function getCredential(
        address _address,
        string memory _degree
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            uint
        )
    {
        return (
            credentials[_address][_degree].name,
            credentials[_address][_degree].educationalInstitution,
            credentials[_address][_degree].degree,
            credentials[_address][_degree].fieldOfStudy,
            credentials[_address][_degree].graduationYear
        );
    }
}
