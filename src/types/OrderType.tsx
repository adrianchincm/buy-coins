export interface OrderRequest {  
  title: string;
  body: string;
  userId: number;
}

export interface OrderResponse extends OrderRequest {
  id: number;  
}
