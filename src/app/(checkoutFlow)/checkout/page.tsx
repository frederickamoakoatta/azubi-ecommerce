"use client";
import React from 'react';
import Header from "@/components/templates/Header";
import GoBack from "@/components/atoms/GoBack";
import CheckoutGroup from "@/components/templates/CheckoutGroup";
import CheckoutSuccess from "@/components/templates/CheckoutSuccess";
import {useAppStore} from "@/store/appStore";

const CheckoutPage = () => {
    const {showCheckout} = useAppStore();
    return (
        <div>
            <Header isCategory={false}/>
            <GoBack/>
            <CheckoutGroup/>
            {showCheckout && <CheckoutSuccess/>}
        </div>
    );
};

export default CheckoutPage;