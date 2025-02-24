import { IProduct } from "../product-service/product-model";

export class ICart{
    products!: IProduct[];
    productQty!: number[];

    private static _instance: ICart;

    private constructor() {
        this.products = [];
        this.productQty = [];
    }

    public static getInstance(): ICart{
        if (!this._instance) {
          this._instance = new ICart();
      }
    
      return this._instance;
    }
}