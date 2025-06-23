"use client";
import Button from "@/components/atoms/Button";
import QuantityInput from "@/components/atoms/QuantityInput";
import SnapShot from "@/components/atoms/SnapShot";
import {useAppStore} from "@/store/appStore";
import { useRouter } from "next/navigation";


const CartModal = () => {
    const {cart, showCart, setShowCart, increaseQty, decreaseQty, clearCart} = useAppStore();
    const router = useRouter();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <div className="w-full fixed inset-0 z-50 bg-overlay flex justify-center items-start p-4 md:p-10 overflow-auto">
                <div className="relative w-full max-w-md md:max-w-[60vh] bg-white rounded-lg flex flex-col gap-5 p-6 mt-20 md:mt-32 overflow-y-auto">

                    <div className="flex justify-between items-center mb-6">
                        <h6 className="text-base md:text-lg font-bold">CART ({cart.length})</h6>
                        {
                            cart.length > 0 ?
                                <p
                                    className="opacity-50 hover:underline cursor-pointer text-sm"
                                    onClick={() => {
                                        clearCart()
                                        setShowCart(!showCart)
                                    }}
                                >
                                    Remove all
                                </p> :
                                <p
                                    className="opacity-50 hover:underline cursor-pointer text-sm"
                                    onClick={() => {setShowCart(!showCart)}}>
                                   Close
                                </p>
                        }

                    </div>

                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between mb-4">
                            <div className="flex gap-4 items-center">
                                <SnapShot src={item.image} width={60} height={60} alt="Cart image"/>
                                <div>
                                <strong className="text-sm">{item.name}</strong>
                                    <p className="text-[14px] text-gray-500">${item.price}</p>
                                </div>
                            </div>
                            <QuantityInput
                                isSmall
                                value={item.quantity}
                                increase={() => increaseQty(item.id)}
                                decrease={() =>decreaseQty(item.id)}
                            />
                        </div>
                    ))}

                    {
                        cart.length > 0 &&
                        <>
                            <div className="flex justify-between items-center mt-6 mb-4">
                                <strong className="opacity-50 uppercase text-sm">Total</strong>
                                <h6 className="text-lg font-semibold">${total.toLocaleString()}</h6>
                            </div>

                            <Button className="w-full justify-center" variant="primary" onClick={() => {
                                setShowCart(!showCart)
                                router.push('/checkout')
                            }}>
                                Checkout
                            </Button>
                        </>
                    }

                </div>
            </div>

        </>
    );
}

export default CartModal;