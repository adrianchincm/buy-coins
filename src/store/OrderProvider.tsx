import { useReducer } from "react";
import { OrderResponse } from "../types/OrderType";
import OrderContext, { OrderContextStateType } from "./OrderContext";

type ActionType = {
  type: string;
  order: OrderResponse;
};

const defaultOrderState: OrderContextStateType = {
  balance: 1000000,
  orders: [],
};

const orderReducer = (state: OrderContextStateType, action: ActionType): OrderContextStateType => {
  if (action.type === "ADD") {
    const updatedBalance = state.balance - parseInt(action.order.body);

    const updatedOrders = [...state.orders, action.order]

    return {
      balance: updatedBalance,
      orders: updatedOrders,
    };
  }

  return defaultOrderState;
};

const OrderProvider = (props: any) => {
  const [orderState, dispatchOrderAction] = useReducer(
    orderReducer,
    defaultOrderState
  );

  const addOrderToOrderHandler = (order: OrderResponse) => {
    dispatchOrderAction({ type: "ADD", order: order });
  };

  const orderContext = {
    balance: orderState.balance,
    orders: orderState.orders,
    addOrder: addOrderToOrderHandler,
  };

  return (
    <OrderContext.Provider value={orderContext}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
