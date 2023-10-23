const hre = require("hardhat");

async function main() {
  const identity = await hre.ethers.deployContract("DigitalIdentity");
  await identity.waitForDeployment();
  //Smart Contract Deployed Address
  console.log(`Deployed Address: ${await identity.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
