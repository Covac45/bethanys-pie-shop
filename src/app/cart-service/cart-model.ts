import { IProduct } from "../product-page/product-details/product-model";

export interface ICart{
    products: IProduct[];
    productQty: number[];
}