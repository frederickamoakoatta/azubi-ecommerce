import React from 'react';
import ProductYouLike from "@/components/compounds/ProductYouLike";
import {ProductType} from "@/types/product";

export type ProductRecommendationProps = Partial<Pick<ProductType, "others" | "category">>

const ProductRecommended = ({others, category} : ProductRecommendationProps) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-12 pb-10">
            <h3>You may also like</h3>
            <div className="w-full flex flex-row justify-between items-center gap-12">
                {
                    others?.map((product, i) => (
                        <ProductYouLike relatedProduct={product} category={category} key={`${i}-relatedProduct`}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductRecommended;