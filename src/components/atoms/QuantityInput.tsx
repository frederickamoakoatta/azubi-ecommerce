"use client";
import {FC} from "react";
import clsx from "clsx";

interface QuantityInputProps {
    value: number;
    increase: () => void;
    decrease: () => void;
    isSmall?: boolean;
    className?: string;
}

const QuantityInput: FC<QuantityInputProps> = ({ value, increase, decrease, className, isSmall = false }) => {
    return (
        <div
            className={clsx(
                className,
                "flex items-center space-x-4 bg-accent rounded-md w-fit",
                "px-4 py-2",
                "sm:px-6 sm:py-2",
                "md:px-8 md:py-4"
            )}
        >
            <button
                className="text-lg sm:text-xl text-gray-400 cursor-pointer hover:text-primary"
                onClick={decrease}
            >
                –
            </button>

            <span className="text-sm sm:text-base text-black font-bold">
    {value}
  </span>

            <button
                className="text-lg sm:text-xl text-gray-400 cursor-pointer hover:text-primary"
                onClick={increase}
            >
                +
            </button>
        </div>

    );
};

export default QuantityInput;
