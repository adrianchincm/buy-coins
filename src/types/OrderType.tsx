export interface OrderRequest {  
  title: string; // coinSymbol
  body: string; // amount in usd
  userId: number; // random mock userId
}

export interface OrderResponse extends OrderRequest {
  id: number;  
}
