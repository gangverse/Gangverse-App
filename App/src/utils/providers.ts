import { StaticJsonRpcProvider } from '@ethersproject/providers'
import getRpcUrl, { getCronosNodeUrl } from 'utils/getRpcUrl'

const RPC_URL = getRpcUrl()
const CRONOS_RPC_URL = getCronosNodeUrl()

export const simpleRpcProvider = new StaticJsonRpcProvider(RPC_URL)
export const simpleCronosRpcProvider = new StaticJsonRpcProvider(CRONOS_RPC_URL)

export default null
