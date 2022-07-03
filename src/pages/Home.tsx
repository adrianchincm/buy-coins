import { useQuery } from "react-query";
import getCoins from "../services/CoinService";
import { Coin } from "../types/CoinType";

const Home = (props: any) => {
  const {
    isLoading,
    isError,
    data,
    error,
  }: {
    isLoading: boolean;
    isError: boolean;
    data: Coin[] | undefined;
    error: Error | null;
  } = useQuery("coins", () => getCoins());

  return (
    <div>
      HOME
      {!isError &&
        data?.map((coin) => {
          return <div>{coin.name}</div>;
        })}
      {isLoading && <div>Loading data from CoinGecko...</div>}
      {isError && <div>Error retrieving data : {error?.message}</div>}
    </div>
  );
};

export default Home;
