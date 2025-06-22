import { create } from 'zustand'
import {productSlice, ProductSliceType} from "@/store/productSlice";
import {cartSlice, CartSliceType} from "@/store/cartSlice";
import {createJSONStorage, persist, devtools} from "zustand/middleware";


export type AppStoreType = ProductSliceType & CartSliceType;

export const useAppStore = create(
    devtools(
        persist<AppStoreType>(
            (...a) => ({
                ...productSlice(...a),
                ...cartSlice(...a),
            }),
            {
                name: 'azubi-ecommerce',
                storage: createJSONStorage(() => localStorage),
            },
        )
    )
)