"use client";
import React from 'react';
import TextInput from "@/components/atoms/TextInput";
import RadioCard from "@/components/atoms/RadioCard";

const CheckoutForm = () => {
    return (
        <div className="w-full flex flex-col items-start justify-center bg-white rounded-lg px-10 py-10 gap-15">
            <h3>Checkout</h3>
            <div className="w-full flex flex-col justify-between items-start gap-5">
                <p className="subtitle text-primary">Billing Details</p>
                <div className="w-full flex flex-row flex-wrap justify-start items-start gap-10">
                    <TextInput className="flex flex-col flex-1" label={'Name'} placeholder={'Insert your name'}
                               value={''} onChange={() => {
                    }}/>
                    <TextInput className="flex flex-col flex-1" label={'Email'} placeholder={'Insert your email'}
                               value={''} onChange={() => {
                    }}/>
                    <TextInput className="w-[41vh]" label={'Phone Number'} placeholder={'Insert your phone number'}
                               value={''} onChange={() => {
                    }}/>
                </div>
            </div>

            <div className="w-full flex flex-col justify-between items-start gap-5">
                <p className="subtitle text-primary">Shipping Info</p>
                <div className="w-full flex flex-row flex-wrap justify-start items-start gap-10">
                    <TextInput className="w-full" label={'Address'} placeholder={'Insert your address'} value={''}
                               onChange={() => {
                               }}/>
                    <TextInput className="flex flex-col flex-1" label={'ZIP Code'} placeholder={'Insert your ZIP Code'}
                               value={''} onChange={() => {
                    }}/>
                    <TextInput className="flex flex-col flex-1" label={'City'} placeholder={'Insert your city'}
                               value={''} onChange={() => {
                    }}/>
                    <TextInput className="w-[41vh]" label={'Country'} placeholder={'Select your country'} value={''}
                               onChange={() => {
                               }}/>
                </div>
            </div>


            <div className="w-full flex flex-col justify-between items-start gap-10">
                <p className="subtitle text-primary">Payment Details</p>
                <div className="w-full flex flex-row justify-between items-start gap-10">
                    <label className="w-full text-sm font-bold">Payment Method</label>
                    <div className="w-full flex flex-col gap-8">
                        <RadioCard className="w-full" label={'Payment Details'} value={'Payment Details'} onChange={() => {}}
                                   checked={false} name={''}/>
                        <RadioCard className="w-full" label={'Payment Details'} value={'Payment Details'} onChange={() => {}}
                                   checked={true} name={''}/>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between items-start gap-10">
                    <TextInput className="flex flex-col flex-1" label={'e-Money Number'} placeholder={'Insert your address'} value={''}
                               onChange={() => {}}/>
                    <TextInput className="flex flex-col flex-1" label={'e-Money PIN'} placeholder={'Insert your ZIP Code'}
                               value={''} onChange={() => {}}/>
                </div>
            </div>

        </div>
    );
};

export default CheckoutForm;