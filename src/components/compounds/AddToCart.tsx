"use client";
import Button from "@/components/atoms/Button";
import QuantityInput from "@/components/atoms/QuantityInput";
import CurrencyFormat from 'react-currency-format';
import {useAppStore} from "@/store/appStore";
import {useState} from "react";

const AddToCart = () => {
    const [count, setCount] = useState(1);
    const {product, addToCart} = useAppStore();

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count === 1 ? 1 : count - 1);
    }

    return (
        <div className="flex flex-col justify-start gap-8">
            <CurrencyFormat
                displayType="text"
                value={product?.price}
                thousandSeparator={true}
                prefix="$"
                renderText={(value) => (
                    <h6 className="text-center md:text-left">{value}</h6>
                )}
            />
            <div className="flex flex-row justify-start items-center gap-5">
                <QuantityInput value={count} increase={increaseCount} decrease={decreaseCount}/>
                <Button variant={'primary'} onClick={() => addToCart({
                    id: product?.id ?? 0,
                    name: product?.name ?? '',
                    price: product?.price ?? 0,
                    image: product?.image.desktop ?? '',
                    quantity: count
                })}>Add to cart</Button>
            </div>
        </div>
    );
};

export default AddToCart;