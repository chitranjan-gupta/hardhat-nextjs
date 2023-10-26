require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

fs.access(path.join(__dirname, ".env.local"), fs.constants.F_OK, (err) => {
  if (err) {
  } else {
    dotenv.config({ path: ".env.local" });
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    cloud: {
      url: String(process.env.NEXT_PUBLIC_BLOCKCHAIN_URL),
    },
  },
  solidity: "0.8.19",
};
