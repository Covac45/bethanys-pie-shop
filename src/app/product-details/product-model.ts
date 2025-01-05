export interface IProduct{
    id: number;
    name: string;
    tagline: string;
    AbpTagline: string;
    CardTagline: string;
    description: string;
    ingredients: string[];
    IngredientsRisk: string[];
    IngredientsQty: string[];
    imageName: string;
    smallImageName: string;
    category: string;
    price: number;
    discount: number;
}