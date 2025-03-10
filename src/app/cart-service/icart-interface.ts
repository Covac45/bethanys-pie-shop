import { IProduct } from "../product-service/product-model"
import { ICart } from "./cart-model";

export interface ICartInterface {

    saveCart():void;
    
      AddProductToCart(product: IProduct): void;
    
      GetCart(): ICart;
    
      FindProductInCart(product: IProduct): number;
    
      RemoveProductFromCart(product: IProduct): void;
    
      clearCart(): void;
}
