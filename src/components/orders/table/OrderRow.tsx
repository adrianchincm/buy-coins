import { formatCurrency } from "@coingecko/cryptoformat";
import { OrderResponse } from "../../../types/OrderType";

type OrderRowProps = {
  order: OrderResponse;
  index: number;
};

const CoinRow = ({ order, index }: OrderRowProps) => {
  return (
    <tr key={order.id}>
      <td className="pl-6 py-4 text-sm text-gray-900 table-cell">{index}</td>
      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
        <div className="flex items-center">{order.title.toUpperCase()}</div>
        <dl className="font-normal lg:hidden">
          <dd className="mt-1 truncate text-gray-700">
            {formatCurrency(parseInt(order.body), "USD", "en")}
          </dd>
        </dl>
      </td>
      <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
        {formatCurrency(parseInt(order.body), "USD", "en")}
      </td>
    </tr>
  );
};

export default CoinRow;
