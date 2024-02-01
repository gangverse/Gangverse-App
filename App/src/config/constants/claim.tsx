import Trans from 'components/Trans'


const claims: any[] = [
  {
    cid: 1, // This one and next are zero but different contracts
    name: 'Cronos Cats Belivers',
    description: 'Linbing NFT holders, your share of the reward pool awaits! Step into the realm of exclusive benefits and claim your deserving share. Linbing - where ownership translates into rewards!',
    imageLink: 'https://images.minted.network/?image=2af028237a58b3b7429e6efdbf55b93e17cbe93179a7d3f1f2cb9cac1602c72c&width=1080&quality=75',
    rewardToken: 'LINBING',
    requiredToken: 'CCT', 
    baseAmount: 50,
    nftLimit: 10,
    totalReward: 100000,
    isFinished: false,
    rewardTokenAddress: '0xAb2FA91c4bBAA64Ad836a336306b31fDfFa2ABF9',
    projectSite: 'https://cronoscats.club',
    version: 1,
  },
  {
    cid: 2, // This one and next are zero but different contracts
    name: 'Gangverse Belivers',
    description: 'Gangverse NFT holders, your share of the reward pool awaits! Step into the realm of exclusive benefits and claim your deserving share. Linbing - where ownership translates into rewards!',
    imageLink: 'https://images.minted.network/?image=048ad912ea81861826eb0f1790bf5c88d42f36cd14d874b61993f2a770329d51&width=1080&quality=75',
    rewardToken: 'WCRO',
    requiredToken: 'GANGVERSE', 
    baseAmount: 5,
    nftLimit: 5,
    totalReward: 10000,
    isFinished: false,
    rewardTokenAddress: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    projectSite: 'https://gangverse.club',
    version: 2,
  },

]


export default claims
