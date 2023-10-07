import Web3 from "web3";

export const initWeb3 = async () => {
  if (window.ethereum) {
    // Modern dapp browsers
    const web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      return web3;
    } catch (error) {
      throw error;
    }
  } else if (window.web3) {
    // Legacy dapp browsers
    const web3 = new Web3(window.web3.currentProvider);
    return web3;
  } else {
    throw new Error(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};
