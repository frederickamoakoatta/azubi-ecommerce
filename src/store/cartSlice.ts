import {StateCreator} from "zustand";

export type CartItemType = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

export type CartSliceType = {
    showCart: boolean;
    setShowCart: (showCart: boolean) => void;
    showCheckout: boolean;
    setShowCheckout: (showCart: boolean) => void;
    cart: CartItemType[];
    addToCart: (item: CartItemType) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
};

export const cartSlice : StateCreator<CartSliceType> = (set: (fn: (state: any) => any) => void): CartSliceType => ({
    showCart: false,
    setShowCart: (showCart) => set((state: any) => ({...state, showCart: showCart})),
    showCheckout: false,
    setShowCheckout: (showCheckout) => set((state: any) => ({...state, showCheckout: showCheckout})),
    cart: [],
    addToCart: (item) =>
        set((state) => {
            const exists = state.cart.find((i: CartItemType) => i.id === item.id);
            if (exists) {
                return {
                    cart: state.cart.map((i: CartItemType) => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                    ),
                };
            }
            return { cart: [...state.cart, item] };
        }),
    removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item: CartItemType) => item.id !== id) })),
    clearCart: () => set(() => ({ cart: [] })),
});
