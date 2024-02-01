import { parseUnits } from '@ethersproject/units'
import { DEFAULT_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import { callWithEstimateGas } from 'utils/calls'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const stakeNftFarmGangverse = async (
  masterChefContract,
  pid,
  collectionAddresses,
  tokenIds,
  gasPrice,
  isSmartNftPool,
  performanceFee
) => {
  const stakePriceWei = performanceFee ? parseUnits(performanceFee, 'ether') : 0;
  const stakeParams = isSmartNftPool ? [collectionAddresses, tokenIds] : [pid, tokenIds];
  return callWithEstimateGas(masterChefContract, 'stakeAll', stakeParams, {
    value: stakePriceWei,
    gasPrice,
  });
};

export const unstakeNftFarmGangverse = async (
  masterChefContract,
  pid,
  collectionAddresses,
  tokenIds,
  gasPrice,
  isSmartNftPool
) => {
  const stakeParams = isSmartNftPool ? [collectionAddresses, tokenIds] : [pid, tokenIds];
  return callWithEstimateGas(masterChefContract, 'unstakeAll', stakeParams, {
    gasPrice,
  })
}

export const harvestNftFarmGangverse = async (masterChefContract, pid, gasPrice, isSmartNftPool) => {
  return isSmartNftPool ? masterChefContract.harvest({ ...options, gasPrice }) : masterChefContract.harvest(pid, { ...options, gasPrice })
}
