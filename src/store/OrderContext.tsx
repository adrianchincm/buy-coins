import { createContext } from "react";
import { OrderResponse } from "../types/OrderType";

export interface OrderContextStateType {
    balance: number;
    orders: OrderResponse[]    
}

export interface OrderContextType extends OrderContextStateType {
    addOrder: (order: OrderResponse) => void,
}

const OrderContext = createContext<OrderContextType>({
    balance: 1000000,
    orders: [],
    addOrder: (order: OrderResponse) => {},
});

export default OrderContext;