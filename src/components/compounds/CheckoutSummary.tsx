"use client";
import SnapShot from "@/components/atoms/SnapShot";
import {useAppStore} from "@/store/appStore";
import Button from "@/components/atoms/Button";

const CheckoutSummary = () => {
    const {cart} = useAppStore();
    return (
        <div className="w-[65vh] flex flex-col items-start justify-center bg-white rounded-lg px-10 py-10 gap-6">
            <h6>Summary</h6>
            <div className="flex flex-col justify-between items-start gap-5">
                {cart.map(item => (
                    <div key={item.id} className="w-full flex flex-row justify-between items-start">
                        <div className="flex gap-4 justify-start items-center">
                            <SnapShot src={item.image} width={60} height={60} alt={'Cart image'}/>
                            <div className="w-1/2">
                                <strong>{item.name}</strong>
                                <p className="text-[14px]">${item.price}</p>
                            </div>
                        </div>
                        <p>x1</p>
                    </div>
                ))}
            </div>

            <div className="w-full flex flex-col justify-between items-start gap-4">
                <div className="w-full flex justify-between items-center">
                    <p className="opacity-50 uppercase">Total</p>
                    <h6>$ 12,00</h6>
                </div>

                <div className="w-full flex justify-between items-center">
                    <p className="opacity-50 uppercase">Shipping</p>
                    <h6>$ 12,00</h6>
                </div>

                <div className="w-full flex justify-between items-center">
                    <p className="opacity-50 uppercase">VAT Included</p>
                    <h6>$ 12,00</h6>
                </div>
            </div>


            <div className="w-full flex justify-between items-center mt-6 mb-4">
                <p className="opacity-50 uppercase">Grand Total</p>
                <h6 className="text-primary font-bold">$ 12,00</h6>
            </div>

            <Button className="w-full justify-center items-center" variant={'primary'}>Continue and pay</Button>
        </div>
    );
};

export default CheckoutSummary;