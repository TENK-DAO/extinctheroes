const contractName = process.env.REACT_APP_CONTRACT_NAME ||'extinctheroes.tenk.testnet';

export default function getConfig() {
  const config = {
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    contractName,
    GAS: '200000000000000',
    DEFAULT_NEW_ACCOUNT_AMOUNT: '5',
  };

  // if (process.env.REACT_APP_ENV === 'prod') {
  // config = {
  //  ...config,
  //  networkId: 'mainnet',
  //  nodeUrl: 'https://rpc.mainnet.near.org',
  //  walletUrl: 'https://wallet.near.org',
  //  helperUrl: 'https://helper.mainnet.near.org',
  // };
  // }

  return config;
}
