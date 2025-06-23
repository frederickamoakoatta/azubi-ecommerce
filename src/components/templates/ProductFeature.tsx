import React from 'react';
import {ProductType} from "@/types/product";

type ProductFeatureProps = Partial<Pick<ProductType, 'features' | 'includes'>>

const ProductFeature = ({features, includes} : ProductFeatureProps) => {
    return (
        <div className="w-full flex flex-row justify-space-between items-start gap-40">
            <div className="w-[75vh] flex flex-col gap-5">
                <h3>Features</h3>
                <p className="opacity-50">{features}</p>
            </div>

            <div className='flex flex-col gap-5'>
                <h3>In the box</h3>
                <div className="flex flex-col justify-start items-start gap-5">
                    {
                        includes?.map((include, i) => (
                            <div key={`${include.item}-${include.quantity}`} className="flex flex-row justify-start items-center gap-5">
                                <span className="text-primary font-bold">{include.quantity}X</span>
                                <span className="opacity-50">{include.item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductFeature;