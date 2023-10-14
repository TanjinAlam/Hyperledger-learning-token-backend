import { ethers } from "ethers";
import abi from "../contracts/LearningToken.json";
const SMART_CONTRACT = import.meta.env.VITE_SMART_CONTRACT;
export const initWeb3 = async () => {
  if ((window as any).ethereum) {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(SMART_CONTRACT!, abi, signer);
    return contract;
  }
};

export const initWeb3Method = async () => {
  if ((window as any).ethereum) {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    // const accounts = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });

    const signer = await provider.getSigner();

    const contract = new ethers.Contract(SMART_CONTRACT!, abi, signer);
    return contract;
  }
};
