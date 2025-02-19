export interface IProduct{
    productId: number;
    productName: string;
    productCategory: string;
    tagline: string;
    atpTagline: string;
    cardTagline: string;
    description: string;
    ingredients: string[];
    ingredientRisk: string[];
    ingredientPct: string[];
    productQuote: string;
    imagePath: string;
    smallImagePath: string;
    price: number;
    //discount: number;
}