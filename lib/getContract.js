const getContractInstance = async (web3, contractDefinition) =>{
    // get network ID and the deployed address
    const networkId = await web3.eth.net.getId()
    //contractDefinition.networks[networkId].address
    const deployedAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

    //Create the instance
    const instance = new web3.eth.Contract(contractDefinition.abi, deployedAddress)
    return instance
}

export default getContractInstance