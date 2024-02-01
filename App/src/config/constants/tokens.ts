import { ChainId, Token } from '@linbingdefi/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { CHAIN_ID } from './networks'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

const CRONOS = 25
const MUMBAI_TESTNET = 80001

interface TokenList {
  [symbol: string]: Token
}

const defineTokens = <T extends TokenList>(t: T) => t

export const mainnetTokens = defineTokens({

  wbnb: new Token(
    MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  busd: new Token(
    MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  cct: new Token(
    CRONOS,
    '0x04615E7988f1407eBAcBC1988de9AB67Ce876686',
    18,
    'CCT',
    'Cronoscats Token',
    'https://cronoscats.club',
  ),
  wcro: new Token(
    CRONOS,
    '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    18,
    'WCRO',
    'Wrapped CRO',
    'https://cronos.org/',
  ),
  linbing: new Token(
    CRONOS,
    '0xAb2FA91c4bBAA64Ad836a336306b31fDfFa2ABF9',
    18,
    'LINBING',
    'Linbing Token',
    'https://linbing.biz/',
  ),
  vvs: new Token(
    CRONOS,
    '0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    18,
    'VVS',
    'VVS',
    'https://vvs.finance/',
  ),
  usdt: new Token(
    CRONOS,
    '0x66e428c3f67a68878562e79A0234c1F83c208770',
    6,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  usdc: new Token(
    CRONOS,
    '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
    6,
    'USDC',
    'Polygon-Peg USD Coin',
    'https://www.centre.io/usdc',
  ),

  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'BNB', 'BNB', 'https://www.binance.com/'),
  cake: new Token(
    MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  tlos: new Token(MAINNET, '0xb6C53431608E626AC81a9776ac3e999c5556717c', 18, 'TLOS', 'Telos', 'https://www.telos.net/'),
  beta: new Token(
    MAINNET,
    '0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28',
    18,
    'BETA',
    'Beta Finance',
    'https://betafinance.org',
  ),
  nft: new Token(MAINNET, '0x1fC9004eC7E5722891f5f38baE7678efCB11d34D', 6, 'NFT', 'APENFT', 'https://apenft.org'),
  stephero: new Token(
    MAINNET,
    '0xE8176d414560cFE1Bf82Fd73B986823B89E4F545',
    18,
    'HERO',
    'StepHero',
    'https://stephero.io/',
  ),
  pros: new Token(MAINNET, '0xEd8c8Aa8299C10f067496BB66f8cC7Fb338A3405', 18, 'PROS', 'Prosper', 'https://prosper.so/'),
  qbt: new Token(MAINNET, '0x17B7163cf1Dbd286E262ddc68b553D899B93f526', 18, 'QBT', 'Qubit Token', 'https://qbt.fi/'),
  cvp: new Token(
    MAINNET,
    '0x5Ec3AdBDae549Dce842e24480Eb2434769e22B2E',
    18,
    'CVP',
    'Concentrated Voting Power Token',
    'https://powerpool.finance/',
  ),
  bscdefi: new Token(
    MAINNET,
    '0x40E46dE174dfB776BB89E04dF1C47d8a66855EB3',
    18,
    'BSCDEFI',
    'BSC Defi blue chips token',
    'https://powerpool.finance/',
  ),

  dai: new Token(
    MAINNET,
    '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  /*usdt: new Token(
    MAINNET,
    '0x55d398326f99059fF775485246999027B3197955',
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),*/
  btcb: new Token(
    MAINNET,
    '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    18,
    'BTCB',
    'Binance BTC',
    'https://bitcoin.org/',
  ),
  ust: new Token(
    MAINNET,
    '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    18,
    'UST',
    'Wrapped UST Token',
    'https://mirror.finance/',
  ),
  eth: new Token(
    MAINNET,
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    18,
    'ETH',
    'Binance-Peg Ethereum Token',
    'https://ethereum.org/en/',
  ),
  /*usdc: new Token(
    MAINNET,
    '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    18,
    'USDC',
    'Binance-Peg USD Coin',
    'https://www.centre.io/usdc',
  ),*/
  kalm: new Token(
    MAINNET,
    '0x4BA0057f784858a48fe351445C672FF2a3d43515',
    18,
    'KALM',
    'Kalmar Token',
    'https://kalmar.io/',
  ),
  dkt: new Token(
    MAINNET,
    '0x7Ceb519718A80Dd78a8545AD8e7f401dE4f2faA7',
    18,
    'DKT',
    'Duelist King',
    'https://duelistking.com/',
  ),
  hotcross: new Token(
    MAINNET,
    '0x4FA7163E153419E0E1064e418dd7A99314Ed27b6',
    18,
    'HOTCROSS',
    'Hotcross Token',
    'https://www.hotcross.com/',
  ),
  belt: new Token(
    MAINNET,
    '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
    18,
    'BELT',
    'Belt Token',
    'https://beta.belt.fi/',
  ),
  watch: new Token(
    MAINNET,
    '0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
    18,
    'WATCH',
    'Yieldwatch Token',
    'https://yieldwatch.net/',
  ),
  bry: new Token(
    MAINNET,
    '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
    18,
    'BRY',
    'Berry Token',
    'https://berrydata.co/',
  ),
  wsote: new Token(
    MAINNET,
    '0x541E619858737031A1244A5d0Cd47E5ef480342c',
    18,
    'wSOTE',
    'Soteria Token',
    'https://soteria.finance/',
  ),
  helmet: new Token(
    MAINNET,
    '0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8',
    18,
    'Helmet',
    'Helmet Token',
    'https://www.helmet.insure/',
  ),
  ten: new Token(
    MAINNET,
    '0xdFF8cb622790b7F92686c722b02CaB55592f152C',
    18,
    'TEN',
    'Tenet Token',
    'https://www.tenet.farm/',
  ),
  ditto: new Token(
    MAINNET,
    '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
    9,
    'DITTO',
    'Ditto Token',
    'https://ditto.money/',
  ),
  blink: new Token(
    MAINNET,
    '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
    6,
    'BLINK',
    'Blink Token',
    'https://blink.wink.org',
  ),
  syrup: new Token(
    MAINNET,
    '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  pha: new Token(
    MAINNET,
    '0x0112e557d400474717056C4e6D40eDD846F38351',
    18,
    'PHA',
    'Phala Token',
    'https://phala.network',
  ),
  babycake: new Token(
    MAINNET,
    '0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c',
    18,
    'BABYCAKE',
    'Baby Cake Token',
    'https://babycake.app/',
  ),
  bmon: new Token(
    MAINNET,
    '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340',
    18,
    'BMON',
    'Binamon Token',
    'https://binamon.org/',
  ),
  hero: new Token(
    MAINNET,
    '0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13',
    18,
    'HERO',
    'Metahero Token',
    'https://metahero.io/',
  ),
  wsg: new Token(
    MAINNET,
    '0xA58950F05FeA2277d2608748412bf9F802eA4901',
    18,
    'WSG',
    'Wall Street Games Token',
    'https://wsg.gg/',
  ),
  mcrn: new Token(
    MAINNET,
    '0xacb2d47827C9813AE26De80965845D80935afd0B',
    18,
    'MCRN',
    'Macaronswap Token',
    'https://www.macaronswap.finance/',
  ),
  revv: new Token(
    MAINNET,
    '0x833F307aC507D47309fD8CDD1F835BeF8D702a93',
    18,
    'REVV',
    'REVV Token',
    'https://revvmotorsport.com/',
  ),
  skill: new Token(
    MAINNET,
    '0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab',
    18,
    'SKILL',
    'Cryptoblades Token',
    'https://www.cryptoblades.io/',
  ),
  if: new Token(
    MAINNET,
    '0xB0e1fc65C1a741b4662B813eB787d369b8614Af1',
    18,
    'IF',
    'Impossible Finance Token',
    'https://impossible.finance/',
  ),
  sps: new Token(
    MAINNET,
    '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
    18,
    'SPS',
    'Splinterlands Token',
    'https://splinterlands.com',
  ),
  chess: new Token(
    MAINNET,
    '0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6',
    18,
    'CHESS',
    'Chess Token',
    'https://tranchess.com/',
  ),
  titan: new Token(
    MAINNET,
    '0xe898EDc43920F357A93083F1d4460437dE6dAeC2',
    18,
    'TITAN',
    'Titanswap Token',
    'https://titanswap.org',
  ),
  harmony: new Token(
    MAINNET,
    '0x03fF0ff224f904be3118461335064bB48Df47938',
    18,
    'ONE',
    'Harmony ONE Token',
    'https://www.harmony.one/',
  ),
  mask: new Token(MAINNET, '0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3', 18, 'MASK', 'Mask Token', 'https://mask.io/'),
  dvi: new Token(
    MAINNET,
    '0x758FB037A375F17c7e195CC634D77dA4F554255B',
    18,
    'DVI',
    'Dvision Network Token',
    'https://dvision.network/',
  ),
  adx: new Token(
    MAINNET,
    '0x6bfF4Fb161347ad7de4A625AE5aa3A1CA7077819',
    18,
    'ADX',
    'Adex Network Token',
    'https://www.adex.network',
  ),
  bscpad: new Token(
    MAINNET,
    '0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700',
    18,
    'BSCPAD',
    'Bscpad Token',
    'https://bscpad.com/',
  ),
  rabbit: new Token(
    MAINNET,
    '0x95a1199EBA84ac5f19546519e287d43D2F0E1b41',
    18,
    'RABBIT',
    'Rabbit Finance Token',
    'https://rabbitfinance.io/earn',
  ),
  form: new Token(
    MAINNET,
    '0x25A528af62e56512A19ce8c3cAB427807c28CC19',
    18,
    'FORM',
    'Formation Token',
    'https://formation.fi/',
  ),
  txl: new Token(MAINNET, '0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5', 18, 'TXL', 'Tixl Token', 'https://tixl.org/'),
  orbs: new Token(
    MAINNET,
    '0xeBd49b26169e1b52c04cFd19FCf289405dF55F80',
    18,
    'ORBS',
    'Orbs Token',
    'https://www.orbs.com/',
  ),
  cos: new Token(
    MAINNET,
    '0x96Dd399F9c3AFda1F194182F71600F1B65946501',
    18,
    'COS',
    'Contentos Token',
    'https://www.contentos.io/',
  ),


} as const)

export const testnetTokens = defineTokens({
  wbnb: new Token(
    TESTNET,
    '0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  usdc: new Token(
    MUMBAI_TESTNET,
    '0xEF21802E25BD223100205e2A3e80aacb5e7211F1',
    18,
    'USDC',
    'USDC Test Token',
    'https://www.org/',
  ),
  usdt: new Token(
    MUMBAI_TESTNET,
    '0x6Add000b64258A977be4bE177A57a5cC8d59939f',
    6,
    'USDT',
    'USDT Test Token',
    'https://www.org/',
  ),
  cake: new Token(
    TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  busd: new Token(
    TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  syrup: new Token(
    TESTNET,
    '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  bake: new Token(
    TESTNET,
    '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    18,
    'BAKE',
    'Bakeryswap Token',
    'https://www.bakeryswap.org/',
  ),
} as const)

const tokens = () => {
  const chainId = CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === MUMBAI_TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {} as typeof testnetTokens & typeof mainnetTokens)
  }

  return mainnetTokens
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {} as SerializedTokenList)

  return serializedTokens
}

export default unserializedTokens