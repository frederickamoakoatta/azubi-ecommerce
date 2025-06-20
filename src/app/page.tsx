"use client";
import Button from "@/components/atoms/Button";
import TextInput from "@/components/atoms/TextInput";
import QuantityInput from "@/components/atoms/QuantityInput";
import RadioCard from "@/components/atoms/RadioCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

        {/*<div className="bg-primaryFade mx-10">*/}
          <p className="text-primary">
            Morbi interdum
            mollis sapien
          </p>
        {/*</div>*/}

        <br/>

        <Button aria-label={'Shop now'} variant={'outline'}>Shop now</Button>

        <TextInput label={'First Name'} value={''} placeholder={'Insert your name'} onChange={() => console.log('First Name')} error={""}/>

        <QuantityInput value={0} onChange={() => console.log('Quantity')} />

        <RadioCard
            name="payment"
            label="e-Money"
            value="e-money"
            checked={false}
            onChange={() => console.log('E-money')}
        />

    </div>
  );
}
