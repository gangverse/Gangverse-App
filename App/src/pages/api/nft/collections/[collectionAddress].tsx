// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDefaultProvider, Network } from "@ethersproject/providers";
import { Contract } from "ethers";
import { getLinbingNftAddress } from "utils/addressHelpers";
import { simpleCronosRpcProvider } from "utils/providers";
import linbingNftAbi from 'config/abi/linbingNft.json'
import { mintingConfig } from "config/constants";
import { formatEther } from "@ethersproject/units";
const axios = require('axios');



const getDatas = async (contract: Contract) => {
  try {
    const totalSupply = await contract.totalSupply()
    const maxSupply = await contract.maxSupply()
    const cost = await contract.cost()
    const formattedCost = cost ? parseFloat(formatEther(cost)) : 0
    const isSaleActive = await contract.isSaleActive()

    return [totalSupply.toNumber(), maxSupply.toNumber(), formattedCost, isSaleActive]
} catch(error) {
  return [0, 0, 0, 0]
}
}






export default async function handler(req, res) {


  let { collectionAddress } = req.query

  const activeMinting = mintingConfig.find((minting) => minting.address === collectionAddress)

  let { name, description, symbol, banner, avatar } = activeMinting


 const contract = new Contract(collectionAddress, linbingNftAbi, simpleCronosRpcProvider)
 const [totalSupply, maxSupply, cost, isSaleActive] = await getDatas(contract)

 let status = 'Active'
 status = totalSupply == maxSupply ? 'Finished' : (!isSaleActive ? 'Paused' : 'Active')

  

  res.status(200).json({
    data: {
      "address": getLinbingNftAddress(),
      "name": name,
      "description": description,
      "symbol": "lngNFT",
      "totalSupply": totalSupply,
      "maxSupply": maxSupply,
      "cost": cost == 0 ? "Free" : cost,
      "status": status,
      "avatar": avatar,
      "banner": {
        "large": banner.large,
      },
      attributes: []
    }
  })
}