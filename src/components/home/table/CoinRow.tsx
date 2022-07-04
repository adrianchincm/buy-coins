import { CoinTable } from "../../../types/CoinType";
import { formatCurrency } from "@coingecko/cryptoformat";

type CoinRowProps = {
  coin: CoinTable;
  open: boolean;
  setOpen: (coinSymbol: string, coinPrice: number) => void;
};

const CoinRow = ({ coin, open, setOpen }: CoinRowProps) => {
  return (
    <tr key={coin.id}>
      <td className="pl-6 py-4 text-sm text-gray-900 table-cell">
        {coin.market_cap_rank}
      </td>
      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
        <div className="flex items-center">
          <img
            className="block h-4 w-auto mr-2"
            src={coin.image}
            alt="BuyCoins"
          />
          {coin.name}
        </div>
        <dl className="font-normal lg:hidden">
          <dt className="sr-only">Title</dt>s
          <dd className="mt-1 truncate text-gray-700">
            {formatCurrency(coin.current_price, "USD", "en")}
          </dd>
          <dt className="sr-only sm:hidden">Email</dt>
          <dd className="mt-1 truncate text-gray-500 sm:hidden">
            Mcap {formatCurrency(coin.market_cap, "USD", "en")}
          </dd>
        </dl>
      </td>
      <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
        {formatCurrency(coin.current_price, "USD", "en")}
      </td>
      <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
        {formatCurrency(coin.market_cap, "USD", "en")}
      </td>
      <td
        className={`px-3 py-4 text-sm ${
          coin.price_change_percentage_24h < 0
            ? "text-red-500"
            : "text-green-500"
        }`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}
      </td>
      <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <button className="text-indigo-600 hover:text-indigo-900" onClick={() => setOpen(coin.symbol, coin.current_price)}>
          Buy
        </button>
      </td>
    </tr>
  );
};

export default CoinRow;
