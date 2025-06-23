"use client";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import SnapShot from "@/components/atoms/SnapShot";
import {useAppStore} from "@/store/appStore";
import {useRouter} from "next/navigation";

const CheckoutSuccess = () => {
    const {cart, showCheckout, setShowCheckout, grandTotal} = useAppStore();
    const router = useRouter();

    const done = () => {
        setShowCheckout(!showCheckout);
        router.push("/");
    }

    return (
        <div className="absolute inset-0 z-10 bg-overlay flex justify-center items-start pt-24 px-4 sm:px-6">
            <div
                className="w-full max-w-xl bg-white rounded-lg flex flex-col gap-10 p-6 sm:p-8 overflow-y-auto min-h-[90vh]">
                <div className="flex flex-col gap-6">
                    <Image
                        src="/images/checkout/icon-order-confirmation.svg"
                        width={50}
                        height={50}
                        alt="Success image"
                    />
                    <h3 className="text-lg sm:text-2xl font-bold">
                        Thank you <br className="hidden sm:block"/> for your order
                    </h3>
                    <p className="opacity-50">You will receive an email confirmation shortly.</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-stretch w-full rounded-lg overflow-hidden">
                    <div className="flex-1 bg-accent flex flex-col justify-center gap-2 py-6 px-5 sm:px-6">
                        <div className="w-full flex justify-between items-start pb-4 border-b border-gray-200">
                            <div className="flex gap-4 items-center">
                                <SnapShot
                                    src={cart[0]?.image}
                                    width={60}
                                    height={60}
                                    alt="Cart image"
                                />
                                <div className="flex flex-col">
                                    <strong>{cart[0]?.name}</strong>
                                    <p className="text-[14px]">${cart[0]?.price}</p>
                                </div>
                            </div>
                            <strong className="text-black opacity-50">x1</strong>
                        </div>
                        <p className="text-sm text-center text-gray-600 pt-2">
                            and {cart.length - 1} other item(s)
                        </p>
                    </div>

                    <div className="lg:w-[36%] w-full bg-black text-white flex flex-col justify-center gap-2 py-6 px-5 sm:px-8 rounded-b-lg lg:rounded-tr-lg lg:rounded-br-lg">
                        <p className="opacity-50 text-sm">GRAND TOTAL</p>
                        <h6 className="text-xl font-bold">${grandTotal}</h6>
                    </div>
                </div>

                <Button onClick={done} className="w-full justify-center" variant="primary">
                    Back to home
                </Button>
            </div>
        </div>
    );
};

export default CheckoutSuccess;