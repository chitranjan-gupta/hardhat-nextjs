import { ethers } from "ethers";

/**
 *
 * @param {*} resolve
 */
const resolveProvider = (resolve) => {
  const alreadyInjected = typeof window.ethereum !== "undefined"; // i.e. Metamask wallet
  const providerLink = process.env.NEXT_PUBLIC_BLOCKCHAIN_URL; //Ganache address: http://127.0.0.1:8545 or http://127.0.0.1:7545
  let provider = null;
  if (alreadyInjected) {
    console.log("Injected Wallet detected.");
    //Use the browser injected Ethereum provider
    provider = new ethers.BrowserProvider(window.ethereum);
  } else {
    console.log("MetaMask not installed; using providerLink");
    provider = new ethers.JsonRpcProvider(providerLink);
  }
  resolve(provider);
};

export function getProvider() {
  return new Promise((resolve) => {
    // Wait for loading completion to avoid race conditions with ethers.js injection timing.
    window.addEventListener("load", () => {
      resolveProvider(resolve);
    });
    // If document has loaded already, try to get ethers.js immediately.
    if (document.readyState === "complete") {
      resolveProvider(resolve);
    }
  });
}
