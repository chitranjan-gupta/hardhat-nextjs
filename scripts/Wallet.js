const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const address = await deployer.getAddress();
  const wallet = await hre.ethers.deployContract("DigitalWallet", [address]);
  await wallet.waitForDeployment();
  //Smart Contract Deployed Address
  console.log(`Deployed Address: ${await wallet.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
