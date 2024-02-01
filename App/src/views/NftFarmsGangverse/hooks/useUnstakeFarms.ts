import { useCallback } from 'react'
import { unstakeNftFarmGangverse } from 'utils/calls'
import { useLinbingNftStake, useSmartNftStakeGangverseContract } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks2'
import { useFarmFromPid } from 'state/nftFarmsGangverse/hooks'
import { getAddress } from 'utils/addressHelpers'

const useUnstakeFarms = (pid: number) => {
  const farm = useFarmFromPid(pid)
  const isSmartNftPool = farm.contractAddresses ? getAddress(farm.contractAddresses) : null
  const masterChefContract = isSmartNftPool ? useSmartNftStakeGangverseContract(pid) : useLinbingNftStake() 
  const gasPrice = useGasPrice()

  const handleUnstake = useCallback(
    async (collectionAddresses: string[], tokenIds: number[]) => {
      return unstakeNftFarmGangverse(masterChefContract, pid, collectionAddresses, tokenIds, gasPrice, isSmartNftPool)
    },
    [masterChefContract, pid, gasPrice, isSmartNftPool],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
