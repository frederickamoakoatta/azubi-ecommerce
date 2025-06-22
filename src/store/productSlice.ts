import {ProductType} from "@/types/product";
import {StateCreator} from "zustand";

export type ProductSliceType = {
    product: ProductType | null;
    setProduct: (product: ProductType | null) => void;
}

export const productSlice : StateCreator<ProductSliceType> = (set: (partial: Partial<ProductSliceType> | ((state: ProductSliceType) => Partial<ProductSliceType>)) => void): ProductSliceType => ({
    product: null,
    setProduct: (product) => set(() => ({ product })),
});