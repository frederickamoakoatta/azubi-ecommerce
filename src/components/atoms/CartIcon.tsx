"use client";
import Image from "next/image";

const CartIcon = ({ count = 0 }: { count: number }) => {
    return (
        <div className="relative">
            <Image
                src="/images/home/cart-icon.svg"
                alt="Cart"
                width={24}
                height={24}
                className="cursor-pointer hover:text-primary transition-colors"
            />

            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
          {count}
        </span>
            )}
        </div>
    );
}

export default CartIcon;