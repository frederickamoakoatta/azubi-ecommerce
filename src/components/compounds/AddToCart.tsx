"use client";
import Button from "@/components/atoms/Button";
import {useAppStore} from "@/store/appStore";
import QuantityInput from "@/components/atoms/QuantityInput";

const AddToCart = () => {
   // const {} = useAppStore();

    return (
        <div className="flex flex-col justify-start gap-8">
            <h6>$ 20,00</h6>
            <div className="flex flex-row justify-start items-center gap-5">
                <QuantityInput value={0} onChange={() => {}}/>
                <Button variant={'primary'}>Add to cart</Button>
            </div>
        </div>
    );
};

export default AddToCart;