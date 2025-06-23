"use client";
import SnapShot from "@/components/atoms/SnapShot";
import {useAppStore} from "@/store/appStore";
import Button from "@/components/atoms/Button";
import {useEffect, useMemo} from "react";

const CheckoutSummary = () => {
    const { cart, setShowCheckout, showCheckout, setGrandTotal } = useAppStore();

    const SHIPPING_COST = 50;

    const { productTotal, vat, grandTotal } = useMemo(() => {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        const vat = total * 0.2;
        const grand = total + vat + SHIPPING_COST;

        return {
            productTotal: total,
            vat,
            grandTotal: grand,
        };
    }, [cart]);

    useEffect(() => {
        setGrandTotal(grandTotal);
    }, [grandTotal, setGrandTotal]);

    return (
        <div className="w-full lg:w-[65vh] flex flex-col items-start justify-center bg-white rounded-lg px-6 sm:px-8 lg:px-10 py-8 lg:py-10 gap-6">
            <h6>Summary</h6>

            <div className="flex flex-col justify-between items-start gap-5 w-full">
                {cart.map(item => (
                    <div key={item.id} className="w-full flex flex-row justify-between items-start">
                        <div className="flex gap-4 justify-start items-center">
                            <SnapShot src={item.image} width={60} height={60} alt={'Cart image'} />
                            <div className="w-1/2">
                                <strong>{item.name}</strong>
                                <p className="text-[14px]">${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <p>x{item.quantity}</p>
                    </div>
                ))}
            </div>

            <div className="w-full flex flex-col justify-between items-start gap-4">
                <div className="w-full flex justify-between items-center">
                    <p className="opacity-50 uppercase">Total</p>
                    <h6>${productTotal.toFixed(2)}</h6>
                </div>

                <div className="w-full flex justify-between items-center">
                    <p className="opacity-50 uppercase">Shipping</p>
                    <h6>${SHIPPING_COST.toFixed(2)}</h6>
                </div>

                <div className="w-full flex justify-between items-center">
                    <p className="opacity-50 uppercase">VAT (Included)</p>
                    <h6>${vat.toFixed(2)}</h6>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-6 mb-4">
                <p className="opacity-50 uppercase">Grand Total</p>
                <h6 className="text-primary font-bold">${grandTotal.toFixed(2)}</h6>
            </div>

            <Button className="w-full justify-center items-center" variant="primary" onClick={() => setShowCheckout(!showCheckout)}>
                Continue and pay
            </Button>
        </div>
    );
};

export default CheckoutSummary;
