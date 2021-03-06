/* eslint-disable */
import * as nearAPI from 'near-api-js';
import getConfig from '../config';
import { Contract } from "tenk-nft";
import { NEAR } from "near-units";

export const { networkId, nodeUrl, walletUrl, contractName } =
  getConfig();

export const {
  utils: {
    format: { formatNearAmount, parseNearAmount },
  },
} = nearAPI;

export const formatAccountId = (accountId, len = 16) => {
  if (accountId.length > len) {
    return `${accountId.substr(0, len - 3)}...`;
  }
  return accountId;
};

export const getWallet = async () => {
  const near = await nearAPI.connect({
    networkId,
    nodeUrl,
    walletUrl,
    deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() },
  });
  const wallet = new nearAPI.WalletAccount(near);
  return { near, wallet };
};

export const getContract = (account) => {
  return new Contract(account, contractName);
};

export const getPrice = async (account) => {
  const contract = getContract(account)
  let oneNFT = "0";
  let costLinkDrop = "0";

  let minter = "aa.near";
  try {
     [oneNFT, costLinkDrop] = await Promise.all([
      NEAR.from(await contract.total_cost({ num: 1, minter })),
      NEAR.from(await contract.cost_of_linkdrop({ minter })),
    ]);
  
    return {
      oneNFT,
      costLinkDrop,
    };
  } catch (e) {
    return { oneNFT, costLinkDrop}
  }
};
