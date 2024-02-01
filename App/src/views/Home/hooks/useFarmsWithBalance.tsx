import { useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import { farmsConfig } from 'config/constants'
import { SerializedFarmConfig } from 'config/constants/types'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { useFastRefreshEffect } from 'hooks/useRefreshEffect'
import { useFarmsPoolLength } from 'state/farms/hooks'

export interface FarmWithBalance extends SerializedFarmConfig {
  balance: BigNumber
}

const useFarmsWithBalance = () => {
  const [farmsWithStakedBalance, setFarmsWithStakedBalance] = useState<FarmWithBalance[]>([])
  const [earningsSum, setEarningsSum] = useState<number>(null)
  const { account } = useWeb3React()
  const poolLength = useFarmsPoolLength()

  useFastRefreshEffect(() => {
    const fetchBalances = async () => {
      const farmsCanFetch = farmsConfig.filter((f) => poolLength > f.pid)
      const calls = farmsCanFetch.map((farm) => ({
        address: getMasterChefAddress(),
        name: 'pendingCake',
        params: [farm.pid, account],
      }))




    }

    if (account && poolLength) {
      fetchBalances()
    }
  }, [account, poolLength])

  return { farmsWithStakedBalance, earningsSum }
}

export default useFarmsWithBalance
