import { ethers } from "ethers";

const getContractInstance = async (
  provider,
  deployedAddress,
  contractDefinition
) => {
  //Create the instance
  const instance = new ethers.Contract(
    deployedAddress,
    contractDefinition.abi,
    await provider.getSigner(0)
  );
  return instance;
};

export { getContractInstance };
