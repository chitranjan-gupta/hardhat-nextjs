// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const simpleStorage = await hre.ethers.deployContract("SimpleStorage"); //Deploying the smart contract

  await simpleStorage.waitForDeployment(); //Waiting for Smart Contract to deployed
  
  //Smart Contract Deployed Address
  console.log(`Deployed Address: ${await simpleStorage.getAddress()}`); 
  
  //console.log("Set the value 10 on the contract");
  //Transacting the Smart Contract function
  //await simpleStorage.set(10);

  //Calling the Smart Contract function
  //console.log(`Get the value ${(await simpleStorage.get()).toString()} from the contract`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
