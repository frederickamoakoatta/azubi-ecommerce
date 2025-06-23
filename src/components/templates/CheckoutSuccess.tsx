"use client";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import SnapShot from "@/components/atoms/SnapShot";
import {useAppStore} from "@/store/appStore";
import {useRouter} from "next/navigation";

const CheckoutSuccess = () => {
    const {cart, showCheckout, setShowCheckout} = useAppStore();
    const router = useRouter();

    const done = () => {
        setShowCheckout(!showCheckout);
        router.push("/");
    }

    return (
        <div className="w-full absolute z-10 top-0 inset-0 bg-overlay">
            <div className="relative flex flex-row justify-center items-start">
                <div className="w-[65vh] relative rounded-lg flex flex-col justify-start items-stretch gap-10 bg-white mt-40 p-6 overflow-y-auto">
                    <div className="flex flex-col justify-start items-start gap-6">
                        <Image src={'/images/checkout/icon-order-confirmation.svg'} width={50} height={50} alt={'Success image'}/>
                        <h3>Thank you <br/>for your order</h3>
                        <p className="opacity-50">You will receive an email confirmation shortly.</p>
                    </div>


                    <div className="flex flex-row justify-between items-center">
                        <div className="w-full h-[20vh] rounded-tl-lg rounded-bl-lg bg-accent flex flex-col justify-center items-center gap-2 py-8 px-10">
                            <div
                                className="w-full flex flex-row justify-between items-start pb-5 border-b-2 border-gray-200">
                                <div className="flex gap-4 justify-start items-center">
                                    <SnapShot src={cart[0]?.image} width={60} height={60} alt={'Cart image'}/>
                                    <div className="w-1/2">
                                        <strong>{cart[0]?.name}</strong>
                                        <p className="text-[14px]">${cart[0]?.price}</p>
                                    </div>
                                </div>
                                <strong className="text-black opacity-50">x1</strong>
                            </div>
                            <p>and 2 other item(s)</p>
                        </div>

                        <div className="w-[40vh] h-[20vh] rounded-tr-lg rounded-br-lg rounded-br-lg  bg-black flex flex-col justify-center items-start gap-2 py-10 px-10">
                            <p className="text-white opacity-50">GRAND TOTAL</p>
                            <h6 className="text-white">$ 5,000</h6>
                        </div>
                    </div>

                    <Button onClick={done} className="w-full justify-center items-center" variant={'primary'}>Back to home</Button>
                </div>
            </div>

        </div>
    );
};

export default CheckoutSuccess;