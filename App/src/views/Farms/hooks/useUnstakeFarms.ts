import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useLinbingFarm } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const useUnstakeFarms = (pid: number) => {
  const masterChefContract = useLinbingFarm() //useMasterchef()
  const gasPrice = useGasPrice()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return unstakeFarm(masterChefContract, pid, amount, gasPrice)
    },
    [masterChefContract, pid, gasPrice],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
