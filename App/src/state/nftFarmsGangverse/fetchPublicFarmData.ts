import erc20 from 'config/abi/erc20.json'
import chunk from 'lodash/chunk'
import { getAddress, getLinbingNftStakeAddress } from 'utils/addressHelpers'
import { multicallCronosv2 } from 'utils/multicall'
import { SerializedNftFarmGangverse } from '../typesgangverse'
import { SerializedNftFarmGangverseConfig } from '../../config/constants/types'
import { nftFarmsGangverseConfig } from 'config/constants'
//import BigNumber from 'bignumber.js'
import { BigNumber } from '@ethersproject/bignumber'

const fetchFarmCalls = (farm: SerializedNftFarmGangverse) => {
  const { contractAddresses, nftAddresses, supportedCollectionPids } = farm;
  
  // Stake Pool Address
  const nftAddress = getAddress(nftAddresses);
  const contractAddress = contractAddresses ? getAddress(contractAddresses) : getLinbingNftStakeAddress();
  
  const calls = [
    // Balance of LP tokens in the master chef contract
    {
      address: nftAddress,
      name: 'balanceOf',
      params: [contractAddress],
    },
  ];

  if (supportedCollectionPids && supportedCollectionPids.length > 0) {
    for (const pid of supportedCollectionPids) {
      const supportedPool = nftFarmsGangverseConfig.find((farm) => farm.pid === pid);
      const supportedNftAddress = getAddress(supportedPool.nftAddresses);
      
      calls.push({
        address: supportedNftAddress,
        name: 'balanceOf',
        params: [contractAddress],
      });
    }
  }

  return calls;
};


export const fetchPublicFarmsData = async (farms: SerializedNftFarmGangverseConfig[]): Promise<any[]> => {
  const farmCalls = farms.flatMap((farm) => fetchFarmCalls(farm))
  const chunkSize = farms.length / farms.length
  const farmMultiCallResult = await multicallCronosv2(erc20, farmCalls)

  const updatedfarmMultiCallResult= [];
  let currentIndex = 0

  for (const farm of farms) {
    const { supportedCollectionPids } = farm;

    let totalBalance = BigNumber.from(farmMultiCallResult[currentIndex][0]._hex);
    currentIndex++;
  
    
    if (supportedCollectionPids && supportedCollectionPids.length > 0) {
      for (const pid of supportedCollectionPids) {
        totalBalance = totalBalance.add(BigNumber.from(farmMultiCallResult[currentIndex][0]._hex));
        currentIndex++;
      }
    }

    updatedfarmMultiCallResult.push(totalBalance.toHexString())

  }

  return chunk(updatedfarmMultiCallResult, chunkSize)
}
