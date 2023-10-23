import { ethers } from "ethers";

const getContractInstance = async (provider, contractDefinition) => {
  const deployedAddress = String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);

  //Create the instance
  const instance = new ethers.Contract(
    deployedAddress,
    contractDefinition.abi,
    await provider.getSigner(0)
  );
  return instance;
};

export { getContractInstance };
