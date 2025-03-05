import { IOrder } from "../order-service/order.model";
import { IProduct } from "../product-service/product-model";

export class IDashboardData{

    private dashProducts!: IProduct[]
    private dashOrders!: IOrder[]

    private static _instance: IDashboardData

    private constructor() {
        this.dashProducts = [];
        this.dashOrders = [];
    }

    public static getInstance(): IDashboardData{
        if (!this._instance) {
          this._instance = new IDashboardData();
      }
    
      return this._instance;
    }
}