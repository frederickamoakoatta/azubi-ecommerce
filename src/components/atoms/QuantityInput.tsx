"use client";
import {FC} from "react";

interface QuantityInputProps {
    value: number;
    onChange: (value: number) => void;
}

const QuantityInput: FC<QuantityInputProps> = ({ value, onChange }) => {
    return (
        <div className="flex items-center space-x-6 bg-accent px-4 py-2 rounded-md w-fit">
            <button className="text-xl text-gray-400 cursor-pointer hover:text-primary" onClick={() => onChange(Math.max(1, value - 1))}>
                –
            </button>
            <span className="text-lg text-black font-bold text-[13px]">{value}</span>
            <button
                className="text-xl text-gray-400 cursor-pointer hover:text-primary"
                onClick={() => onChange(value + 1)}
            >
                +
            </button>
        </div>
    );
};

export default QuantityInput;
