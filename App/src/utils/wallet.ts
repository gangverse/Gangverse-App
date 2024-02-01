// Set of helper functions to facilitate wallet setup

import { BASE_BSC_SCAN_URL, BASE_LINBING_URL, BASE_CRONOS_SCAN_URL } from 'config'
import { cronosNodes, mumbaiNodes, nodes } from './getRpcUrl'

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  const provider = window.ethereum
  if (provider) {
    const chainId = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10)
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Cronos Mainnet',
            nativeCurrency: {
              name: 'CRO',
              symbol: 'cro',
              decimals: 18,
            },
            rpcUrls: nodes,
            blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
          },
        ],
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error("Can't setup the CRONOS network on metamask because window.ethereum is undefined")
    return false
  }
}

/**
 * Prompt the user to add Cronos as a network on Metamask, or switch to Cronos if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
 export const setupNetworkforCronos = async (connector) => {
  const provider = connector === "okx" ? window.okxwallet : connector === "bitkeep" ? window.bitkeep.ethereum : window.ethereum;
  if (provider) {
    const chainId = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10)
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: chainId == 25 ? 'Cronos Mainnet' : 'Mumbai Testnet',
            nativeCurrency: {
              name: 'Cro',
              symbol: 'CRO',
              decimals: 18,
            },
            rpcUrls: chainId == 25 ? cronosNodes : mumbaiNodes,
            blockExplorerUrls: [`${BASE_CRONOS_SCAN_URL}/`],
          },
        ],
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error("Can't setup the CRONOS network on metamask because window.ethereum is undefined")
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `${BASE_LINBING_URL}/images/tokens/${tokenAddress}.png`,
      },
    },
  })

  return tokenAdded
}
