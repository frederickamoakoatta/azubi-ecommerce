"use client";
import Button from "@/components/atoms/Button";
import QuantityInput from "@/components/atoms/QuantityInput";
import SnapShot from "@/components/atoms/SnapShot";
import {useAppStore} from "@/store/appStore";


const CartModal = () => {
    const {cart, showCart, setShowCart} = useAppStore()

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
                <div className="w-full absolute z-10 top-0 inset-0 bg-overlay">
                    <div className="relative flex flex-row justify-end items-start">
                        <div className="w-[60vh] relative rounded-lg flex flex-col justify-start items-stretch gap-5 bg-white mr-32 mt-32 p-6 overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h6>CART ({cart.length})</h6>
                                <p className="opacity-50 hover:underline cursor-pointer" onClick={() => {
                                }}>Remove all</p>
                            </div>

                            {cart.map(item => (
                                <div key={item.id} className="flex items-center justify-between mb-4">
                                    <div className="flex gap-4 items-center">
                                        <SnapShot src={item.image} width={60} height={60} alt={'Cart image'}/>
                                        <div>
                                            <strong>{item.name}</strong>
                                            <p className="text-[14px]">${item.price}</p>
                                        </div>
                                    </div>
                                    <QuantityInput isSmall value={item.quantity} increase={() => {
                                    }} decrease={() => {
                                    }}/>
                                </div>
                            ))}

                            <div className="flex justify-between items-center mt-6 mb-4">
                                <strong className="opacity-50 uppercase">Total</strong>
                                <h6>${total.toLocaleString()}</h6>
                            </div>

                            <Button className="w-full justify-center items-center" variant={'primary'}>Checkout</Button>
                        </div>

                        <button onClick={() => setShowCart(!showCart)} className="absolute cursor-pointer top-4 right-4 text-white hover:text-primary text-lg">
                            ✕
                        </button>
                    </div>

                </div>
        </>
    );
}

export default CartModal;