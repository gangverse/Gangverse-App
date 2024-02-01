import { useCallback } from 'react'
import { harvestNftFarmGangverse } from 'utils/calls'
import { useLinbingNftStake, useSmartNftStakeGangverseContract } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks2'
import { useFarmFromPid } from 'state/nftFarmsGangverse/hooks'
import { getAddress } from 'utils/addressHelpers'

const useHarvestFarm = (farmPid: number) => {
  const farm = useFarmFromPid(farmPid)
  const isSmartNftPool = farm.contractAddresses ? getAddress(farm.contractAddresses) : null
  const masterChefContract = isSmartNftPool ? useSmartNftStakeGangverseContract(farmPid) : useLinbingNftStake() 
  const gasPrice = useGasPrice()

  const handleHarvest = useCallback(async () => {
    return harvestNftFarmGangverse(masterChefContract, farmPid, gasPrice, isSmartNftPool)
  }, [farmPid, masterChefContract, gasPrice])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
