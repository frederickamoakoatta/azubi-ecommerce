"use client";
import clsx from "clsx";
import {FC} from "react";

interface TextInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    className?: string;
}

const TextInput: FC<TextInputProps> = ({ label, value, onChange, placeholder, error, className }) => {
    const borderColor = error ? "border-red-500" : value ? "border-primary" : "border-gray-300";

    return (
        <div className={clsx("flex flex-col space-y-1", className)}>
            <div className={clsx("flex flex-row items-center", error && "justify-between")}>
                <label className={clsx("text-sm font-bold", error && "text-red")}>
                    {label}
                </label>
                {error && (
                    <div className="text-red text-xs font-medium text-right">
                        {error}
                    </div>
                )}
            </div>
            <input
                type="text"
                className={clsx(
                    "rounded-md normal-case px-4 py-3 outline-none border transition-colors",
                    borderColor,
                    "focus:border-primary"
                )}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextInput;
