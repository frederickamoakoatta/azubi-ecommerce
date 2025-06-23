import React from 'react';
import ProductYouLike from "@/components/compounds/ProductYouLike";
import {ProductType} from "@/types/product";

export type ProductRecommendationProps = Partial<Pick<ProductType, "others" | "category">>

const ProductRecommended = ({others, category} : ProductRecommendationProps) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-12 px-4 md:px-10 pb-10">
            <h3 className="hidden md:block text-center">You may also like</h3>
            <h5 className="md:hidden text-center text-xl font-bold">You may also like</h5>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-12">
                {others?.map((product, i) => (
                    <ProductYouLike relatedProduct={product} category={category} key={`${i}-relatedProduct`}/>
                ))}
            </div>
        </div>

    );
};

export default ProductRecommended;