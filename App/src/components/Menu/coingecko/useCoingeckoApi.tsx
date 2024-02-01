
import { useState, useEffect } from 'react';
import axios from 'axios';
import BigNumber from 'bignumber.js';

interface Props {
    usd: number
    usd_market_cap: number
    usd_24h_change: number
    coin_usd: BigNumber
  }

  
export const useCoingeckoApi = () => {
    const [response, setResponse] = useState<Props>();
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
      //  .get('https://cronos.org/explorer/api?module=stats&action=coinprice')
      // .get('https://api.coingecko.com/api/v3/simple/price?ids=cronos&vs_currencies=usd')
            .get('https://cronos.org/explorer/api?module=stats&action=coinprice')
            .then((res) => {
                setResponse(res.data.result);
             //   setResponse(res.data.cronos.usd);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // custom hook returns value
    return { response, error, loading };
};
