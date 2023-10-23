require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    local: {
      url: "https://8545-chitranjang-hardhatnext-sep9rc756p2.ws-us105.gitpod.io",
    },
  },
  solidity: "0.8.19",
};
