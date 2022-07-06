import { OrderResponse } from "../types/OrderType";

const axios = require("axios").default;

const createOrder = async (coinSymbol: string, coinPrice: number): Promise<OrderResponse | string> => {
  // just a mock endpoint to simulate a POST request and handling its response
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts/", {
        title: coinSymbol,
        body: coinPrice,
        userId: 123
      }
    );
    return response.data;
  } catch (error: any) {    
    throw new Error(error.message);
  }
};

export default createOrder;
