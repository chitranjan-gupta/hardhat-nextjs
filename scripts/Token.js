const hre = require("hardhat");

async function main() {
  const token = await hre.ethers.deployContract("Token");
  await token.waitForDeployment();
  //Smart Contract Deployed Address
  console.log(`Deployed Address: ${await token.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
