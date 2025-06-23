"use client";
import {FC} from "react";
import clsx from "clsx";

interface QuantityInputProps {
    value: number;
    increase: () => void;
    decrease: () => void;
    isSmall?: boolean;
}

const QuantityInput: FC<QuantityInputProps> = ({ value, increase, decrease, isSmall = false }) => {
    return (
        <div className={clsx("flex items-center space-x-6 bg-accent rounded-md w-fit", isSmall ? "py-2 px-6" : "py-4 px-8")}>
            <button className="text-xl text-gray-400 cursor-pointer hover:text-primary" onClick={decrease}>
                –
            </button>
            <span className="text-lg text-black font-bold text-[13px]">{value}</span>
            <button
                className="text-xl text-gray-400 cursor-pointer hover:text-primary"
                onClick={increase}
            >
                +
            </button>
        </div>
    );
};

export default QuantityInput;
