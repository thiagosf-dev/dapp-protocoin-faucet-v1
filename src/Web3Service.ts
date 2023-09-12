import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import ABI from './abi.json';

const CONTRACT_ADDRESS = `${process.env.REACT_APP_CONTRACT_ADDRESS}`;

console.info("CONTRACT_ADDRESS :>> ", CONTRACT_ADDRESS);

export async function mint() {
  if (!window.ethereum) throw new Error(`No MetaMask found!`);

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();

  console.info("accounts :>> ", accounts);

  if (!accounts || !accounts.length) throw new Error(`No account allowed!`);

  const contract = new web3.eth.Contract(ABI as AbiItem[], CONTRACT_ADDRESS, { from: accounts[0] });
  const tx = await contract.methods.mint().send();
  console.log("transactionHash :>> ", tx.transactionHash);
  return tx.transactionHash;
}
