import React from 'react';
import CheckoutForm from "@/components/compounds/CheckoutForm";
import PageSpace from "@/components/compounds/PageSpace";
import CheckoutSummary from "@/components/compounds/CheckoutSummary";

const CheckoutGroup = () => {
    return (
        <PageSpace className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <CheckoutForm />
            <CheckoutSummary />
        </PageSpace>
    );
};

export default CheckoutGroup;