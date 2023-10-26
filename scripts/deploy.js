const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

/**
 *
 * @param {JSONObject} data
 * @returns {void} void
 */
function saveContractAddress(data) {
  const artifactsDir = path.join(__dirname, "..", "artifacts");
  if (!fs.existsSync(artifactsDir)) {
    return;
  }
  fs.writeFileSync(
    path.join(artifactsDir, "contract-address.json"),
    JSON.stringify(data, undefined, 2)
  );
}

async function main() {
  const simpleStorage = await hre.ethers.deployContract("SimpleStorage");
  await simpleStorage.waitForDeployment();
  const data = {
    SimpleStorage: await simpleStorage.getAddress(),
  };
  saveContractAddress(data);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
