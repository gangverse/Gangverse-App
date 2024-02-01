import BigNumber from 'bignumber.js'
import { getLinbingAutoPoolVaultContract } from 'utils/contractHelpers'

const cakeVaultContract = getLinbingAutoPoolVaultContract()

const fetchVaultUser = async (account: string) => {
  
  try {
    const userContractResponse = await cakeVaultContract.userInfo(account)

    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      cakeAtLastUserAction: new BigNumber(userContractResponse.linbingAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      cakeAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
