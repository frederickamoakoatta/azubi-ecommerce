"use client";
import React, { useState } from 'react';
import TextInput from "@/components/atoms/TextInput";
import RadioCard from "@/components/atoms/RadioCard";

const CheckoutForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        eMoneyNumber: '',
        eMoneyPIN: '',
        paymentMethod: 'eMoney',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        if (value.trim() !== '') {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.name) newErrors.name = "Required";
        if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
        if (!form.phone) newErrors.phone = "Required";
        if (!form.address) newErrors.address = "Required";
        if (!form.zip) newErrors.zip = "Required";
        if (!form.city) newErrors.city = "Required";
        if (!form.country) newErrors.country = "Required";

        if (form.paymentMethod === 'eMoney') {
            if (!form.eMoneyNumber) newErrors.eMoneyNumber = "Required";
            if (!form.eMoneyPIN) newErrors.eMoneyPIN = "Required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log("Submitted:", form);
        }
    };

    return (
        <div className="w-full flex flex-col items-start justify-center bg-white rounded-lg px-4 md:px-10 py-8 md:py-10 gap-10">
            <h3 className="text-lg md:text-2xl">Checkout</h3>

            {/* Billing Details */}
            <div className="w-full flex flex-col gap-4 md:gap-5">
                <p className="subtitle text-primary">Billing Details</p>
                <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-6">
                    <TextInput
                        className="flex flex-col flex-1"
                        label="Name"
                        value={form.name}
                        onChange={(v) => handleChange("name", v)}
                        error={errors.name}
                    />
                    <TextInput
                        className="flex flex-col flex-1"
                        label="Email"
                        value={form.email}
                        onChange={(v) => handleChange("email", v)}
                        error={errors.email}
                    />
                    <TextInput
                        className="w-full md:w-[41vh]"
                        label="Phone Number"
                        value={form.phone}
                        onChange={(v) => handleChange("phone", v)}
                        error={errors.phone}
                    />
                </div>
            </div>

            {/* Shipping Info */}
            <div className="w-full flex flex-col gap-4 md:gap-5">
                <p className="subtitle text-primary">Shipping Info</p>
                <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-6">
                    <TextInput
                        className="w-full"
                        label="Address"
                        value={form.address}
                        onChange={(v) => handleChange("address", v)}
                        error={errors.address}
                    />
                    <TextInput
                        className="flex flex-col flex-1"
                        label="ZIP Code"
                        value={form.zip}
                        onChange={(v) => handleChange("zip", v)}
                        error={errors.zip}
                    />
                    <TextInput
                        className="flex flex-col flex-1"
                        label="City"
                        value={form.city}
                        onChange={(v) => handleChange("city", v)}
                        error={errors.city}
                    />
                    <TextInput
                        className="w-full md:w-[41vh]"
                        label="Country"
                        value={form.country}
                        onChange={(v) => handleChange("country", v)}
                        error={errors.country}
                    />
                </div>
            </div>

            {/* Payment Details */}
            <div className="w-full flex flex-col gap-6 md:gap-10">
                <p className="subtitle text-primary">Payment Details</p>
                <div className="w-full flex flex-col md:flex-row gap-6">
                    <label className="text-sm font-bold w-full md:w-1/2">Payment Method</label>
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <RadioCard
                            label="e-Money"
                            value="eMoney"
                            checked={form.paymentMethod === "eMoney"}
                            onChange={(v) => handleChange("paymentMethod", v)}
                            name="payment"
                        />
                        <RadioCard
                            label="Cash on Delivery"
                            value="cod"
                            checked={form.paymentMethod === "cod"}
                            onChange={(v) => handleChange("paymentMethod", v)}
                            name="payment"
                        />
                    </div>
                </div>

                {form.paymentMethod === 'eMoney' && (
                    <div className="w-full flex flex-col md:flex-row gap-6">
                        <TextInput
                            className="flex flex-col flex-1"
                            label="e-Money Number"
                            value={form.eMoneyNumber}
                            onChange={(v) => handleChange("eMoneyNumber", v)}
                            error={errors.eMoneyNumber}
                        />
                        <TextInput
                            className="flex flex-col flex-1"
                            label="e-Money PIN"
                            value={form.eMoneyPIN}
                            onChange={(v) => handleChange("eMoneyPIN", v)}
                            error={errors.eMoneyPIN}
                        />
                    </div>
                )}
            </div>

            <button
                onClick={handleSubmit}
                className="w-full bg-primary text-white px-6 py-3 mt-4 rounded hover:bg-primary-dark transition-all"
            >
                Continue to Payment
            </button>
        </div>
    );
};

export default CheckoutForm;
