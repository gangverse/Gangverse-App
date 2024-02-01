import { FAST_INTERVAL, SLOW_INTERVAL } from 'config/constants'
// eslint-disable-next-line camelcase
import { useSelector } from 'react-redux'
import useSWR, { unstable_serialize, useSWRConfig } from 'swr'
import { simpleCronosRpcProvider, simpleRpcProvider } from 'utils/providers'
import useSWRImmutable from 'swr/immutable'
import { State } from '../types'
const REFRESH_BLOCK_INTERVAL = 6000
import { setBlock } from '.'
export const usePollBlockNumber = () => {
  const { cache, mutate } = useSWRConfig()

  const { data } = useSWR(
    ['blockNumber'],
    async () => {
      const blockNumber = await simpleCronosRpcProvider.getBlockNumber()
      if (!cache.get(unstable_serialize(['initialBlockNumber']))) {
        mutate(['initialBlockNumber'], blockNumber)
      }
      return blockNumber
    },
    {
      refreshInterval: REFRESH_BLOCK_INTERVAL,
    },
  )

  useSWR(
    [FAST_INTERVAL, 'blockNumber'],
    async () => {
      return data
    },
    {
      refreshInterval: FAST_INTERVAL,
    },
  )

  useSWR(
    [SLOW_INTERVAL, 'blockNumber'],
    async () => {
      return data
    },
    {
      refreshInterval: SLOW_INTERVAL,
    },
  )
}

export const useCurrentBlock = (): number => {
  const { data: currentBlock = 0 } = useSWRImmutable(['blockNumber'])
  return currentBlock
}

export const useInitialBlock = (): number => {
  const { data: initialBlock = 0 } = useSWRImmutable(['initialBlockNumber'])
  return initialBlock
}
export const useBlock = () => {
  return useSelector((state: State) => state.block)
}