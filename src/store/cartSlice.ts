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
    grandTotal: number;
    setGrandTotal: (grandTotal: number) => void;
    cart: CartItemType[];
    addToCart: (item: CartItemType) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    increaseQty: (id: number) => void;
    decreaseQty: (id: number) => void;
};

export const cartSlice : StateCreator<CartSliceType> = (set: (fn: (state: any) => any) => void): CartSliceType => ({
    showCart: false,
    setShowCart: (showCart) => set((state: any) => ({...state, showCart: showCart})),
    showCheckout: false,
    setShowCheckout: (showCheckout) => set((state: any) => ({...state, showCheckout: showCheckout})),
    grandTotal: 0,
    setGrandTotal: (grandTotal) => set((state: any) => ({...state, grandTotal: grandTotal})),
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
    increaseQty: (id: number) => set(state => {
        const updatedCart = state.cart.map((item: CartItemType) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { cart: updatedCart };
    }),

    decreaseQty: (id: number) => set(state => {
        const updatedCart = state.cart.map((item: CartItemType) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        return { cart: updatedCart };
    }),
});
