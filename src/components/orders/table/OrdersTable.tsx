import { useContext } from "react";
import OrderContext from "../../../store/OrderContext";
import OrderRow from "./OrderRow";
import { TableDescription } from "./TableDescription";
import TableHeader from "./TableHeader";

const OrdersTable = () => {
  const orderCtx = useContext(OrderContext);

  return (
    <div className="mx-auto lg:w-2/3 md:w-3/4 px-4 sm:px-6">
      <TableDescription />
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="table-auto min-w-full divide-y divide-gray-300">
          <TableHeader />
          <tbody className="divide-y divide-gray-200 bg-white">
            {orderCtx.orders.map((order, index) => (
              <OrderRow order={order} index={index + 1} />
            ))}
            {orderCtx.orders.length === 0 && (
              <tr>
                <td className="pl-6 py-4 text-sm text-gray-900 table-cell">
                  You have not made any orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
