import { Coin } from "../types/CoinType";

const axios = require("axios").default;

const getCoins = async (): Promise<Coin[] | string> => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    return response.data;
  } catch (error: any) {    
    throw new Error(error.message);
  }
};

export default getCoins;
