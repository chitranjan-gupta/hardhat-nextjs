# hardhat-nextjs

## Setup
> Node.js should be installed and npm

1. Install all the dependencies
    ```bash
    npm install
    ```

## Build
1. Run the local hardhat node on separate terminal shell
    ```bash
    npx hardhat node
    ```
2. Deploy the contract on local hardhat node on different terminal shell
    ```bash
    npx hardhat run scripts/<scriptName>.js --network localhost
    ```
3. Copy the contract deployed address and paste next to `NEXT_PUBLIC_CONTRACT_ADDRESS` in .env file
4. Paste the hardhat node running link next to `NEXT_PUBLIC_BLOCKCHAIN_URL` in .env file
5. Now build Next.js Application
    ```bash
    npm run build
    ```

## Test
1. Test the contracts
    ```bash
    npx hardhat test
    ```

## Execute
1. Run the Next.js application
    ```bash
    npm start
    ```

Sources:
1. https://hardhat.org/tutorial
2. https://github.com/NomicFoundation/hardhat-boilerplate 
3. https://medium.com/coinmonks/build-a-web-3-application-with-solidity-hardhat-react-and-web3js-61b7ff137885
4. https://docs.ethers.org/v6/single-page/