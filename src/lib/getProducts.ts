import products from '@/data/data.json';
import {ProductType} from "@/types/product";

export const getAllProducts = () : Array<ProductType> => {
    return products;
}

export const getProductByCategory = (categoryName: string) : Array<ProductType> => {
    const categoryProducts = products.filter((product : ProductType) => product.category === categoryName);
    return categoryProducts.sort((a: ProductType, b: ProductType) => {
        return (b.new ? 1 : 0) - (a.new ? 1 : 0);
    });
}