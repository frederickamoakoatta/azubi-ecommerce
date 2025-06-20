"use client";
import clsx from "clsx";
import {FC} from "react";

interface RadioCardProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
    name: string;
}

const RadioCard: FC<RadioCardProps> = ({
                                                 label,
                                                 value,
                                                 checked,
                                                 onChange,
                                                 name,
                                             }) => {
    return (
        <label
            className={clsx(
                "flex items-center border rounded-md px-4 py-4 cursor-pointer transition-all",
                checked ? "border-primary" : "border-gray-300 hover:border-primary"
            )}
        >
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
                className="hidden"
            />
            <span
                className={clsx(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4",
                    checked ? "border-primary" : "border-gray-400"
                )}
            >
        {checked && <span className="w-2.5 h-2.5 bg-primary rounded-full" />}
      </span>
            <span className="font-bold text-black">{label}</span>
        </label>
    );
};

export default RadioCard;
