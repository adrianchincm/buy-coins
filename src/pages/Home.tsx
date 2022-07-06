import { useState } from "react";
import { useQuery } from "react-query";
import BuyCoinsModal from "../components/home/buy-coins/BuyCoinsModal";
import CoinsTable from "../components/home/table/CoinsTable";
import getCoins from "../services/CoinService";
import { Coin, CoinTable } from "../types/CoinType";

const Home = (props: any) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCoinSymbol, setSelectedCoinSymbol] = useState("");
  const [selectedCoinPrice, setSelectedCoinPrice] = useState(0);
  const [selectedCoinImage, setSelectedCoinImage] = useState("");

  const openBuyCoinsModal = (
    coinSymbol: string,
    coinPrice: number,
    coinImage: string
  ) => {
    console.log("OPENSSS " + coinSymbol + coinPrice);
    setSelectedCoinSymbol(coinSymbol);
    setSelectedCoinPrice(coinPrice);
    setSelectedCoinImage(coinImage);
    setOpenModal(true);
  };

  const closeBuyCoinsModal = () => {
    setOpenModal(false);
  };

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
      {!isError && !isLoading && (
        <CoinsTable
          coins={data as CoinTable[]}
          open={openModal}
          setOpen={openBuyCoinsModal}
        />
      )}

      <div className="text-center">
        {isLoading && <div>Loading data from CoinGecko...</div>}
        {isError && <div>Error retrieving data : {error?.message}</div>}
      </div>

      <BuyCoinsModal
        coinSymbol={selectedCoinSymbol}
        coinPrice={selectedCoinPrice}
        open={openModal}
        closeModal={closeBuyCoinsModal}
        coinImage={selectedCoinImage}
      />
    </div>
  );
};

export default Home;
