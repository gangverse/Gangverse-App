// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Moralis from "moralis";


//https://github.com/nft-api/nft-api
export default function handler(req, res) {

    const { collectionAddress } = req.query;
    console.log(collectionAddress)

    Moralis.Web3API.initialize({apiKey: process.env.MORALIS_API_KEY, serverUrl: "???"});
    
    const getNfts = async () => {
        
        /*
        Nfts's of address
        const cronosNFTs  =await Moralis.Web3API.account.getNFTs({ chain: '0x89', address: '0xa28E4B20b70A1992B265478C69539F28D7f689a8' });
        console.log(cronosNFTs);
        */

        
        const cronosNFTs  =await Moralis.Web3API.token.getAllTokenIds({ 
            chain: 'cronos', 
            address: '0xaBaa122B9E6B64FCBDD55A03eEb8729220F9C589',
            limit: 20,
        });
        console.log(cronosNFTs);


    }

    



    getNfts();



    res.status(200).json({ name: 'John Doe' })

}
