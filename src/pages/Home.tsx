import { useQuery } from "react-query";
import CoinsTable from "../components/home/CoinsTable";
import getCoins from "../services/CoinService";
import { Coin, CoinTable } from "../types/CoinType";

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
    <div className="my-8">            
      {(!isError && !isLoading) &&
        <CoinsTable coins={data as CoinTable[]} />}
      {isLoading && <div>Loading data from CoinGecko...</div>}
      {isError && <div>Error retrieving data : {error?.message}</div>}
    </div>
  );
};

export default Home;
