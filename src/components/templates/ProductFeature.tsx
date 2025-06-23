import React from 'react';
import {ProductType} from "@/types/product";

type ProductFeatureProps = Partial<Pick<ProductType, 'features' | 'includes'>>

const ProductFeature = ({features, includes} : ProductFeatureProps) => {
    return (
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start lg:gap-40">
            {/* Features Section */}
            <div className="w-full lg:w-full flex flex-col gap-5 order-1 lg:order-none">
                <h5 className="block lg:hidden">Features</h5>
                <h3 className="hidden lg:block">Features</h3>
                <p className="opacity-50">{features}</p>
            </div>

            {/* In the Box Section */}
            <div className="w-full flex flex-col gap-5 order-2">
                <h5 className="block lg:hidden">In the box</h5>
                <h3 className="hidden lg:block">In the box</h3>
                <div className="flex flex-col justify-start items-start gap-5">
                    {includes?.map((include) => (
                        <div key={`${include.item}-${include.quantity}`}
                             className="flex flex-row justify-start items-center gap-5">
                            <span className="text-primary font-bold">{include.quantity}X</span>
                            <span className="opacity-50">{include.item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ProductFeature;