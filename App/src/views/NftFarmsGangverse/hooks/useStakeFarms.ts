import { useCallback } from 'react'
import { stakeNftFarmGangverse } from 'utils/calls'
import { useLinbingNftStake, useSmartNftStakeGangverseContract, useSousChef } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks2'
import { useFarmFromPid } from 'state/nftFarmsGangverse/hooks'
import { getAddress } from 'utils/addressHelpers'

const useStakeFarms = (pid: number) => {
  const farm = useFarmFromPid(pid)
  const isSmartNftPool = farm.contractAddresses ? getAddress(farm.contractAddresses) : null
  const masterChefContract = isSmartNftPool ? useSmartNftStakeGangverseContract(pid) : useLinbingNftStake() 
  const gasPrice = useGasPrice()

  const handleStake = useCallback(
    async (collectionAddresses: string[], tokenIds: number[]) => {
      return stakeNftFarmGangverse(masterChefContract, pid, collectionAddresses, tokenIds, gasPrice, isSmartNftPool, farm.performanceFee);
    },
    [masterChefContract, pid, gasPrice, isSmartNftPool, farm.performanceFee]
  );
  


  return { onStake: handleStake }
}

export default useStakeFarms
