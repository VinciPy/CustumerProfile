import Client from "./Client";

export default class Purchase {
    Client: Client;
    DatePurchase: Date;
    Amount: number;
    Discount: number;
    Products: string[];


    constructor(Client: Client, DatePurchase: Date, Amount: number, Discount: number, Products: string[]) {
     this.Client = Client;  
     this.DatePurchase = DatePurchase;
     this.Amount = Amount;
     this.Discount = Discount;
     this.Products = Products;
    }
}