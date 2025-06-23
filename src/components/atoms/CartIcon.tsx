"use client";
import Image from "next/image";
import {useAppStore} from "@/store/appStore";

const CartIcon = () => {
    const {showCart, setShowCart, cart} = useAppStore();

    return (
        <div className="relative cursor-pointer" onClick={() =>setShowCart(!showCart)}>
            <Image
                src="/images/home/cart-icon.svg"
                alt="Cart"
                width={24}
                height={24}
                className="cursor-pointer hover:text-primary transition-colors"
            />

            {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
          {cart.length}
        </span>
            )}
        </div>
    );
}

export default CartIcon;