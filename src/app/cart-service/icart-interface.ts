import { IProduct } from "../product-page/product-details/product-model"

export interface ICartInterface {

    saveCart():void;
    
      AddProductToCart(product: IProduct): void;
    
      GetCart(): IProduct[];
    
      FindProductInCart(product: IProduct): number;
    
      RemoveProductFromCart(product: IProduct): void;
    
      clearCart(): void;

}
