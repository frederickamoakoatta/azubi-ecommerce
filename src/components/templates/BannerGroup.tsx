import React from 'react';
import PageSpace from "@/components/compounds/PageSpace";
import BigBanner from "@/components/compounds/BigBanner";
import MediumBanner from "@/components/compounds/MediumBanner";
import SmallBanner from "@/components/compounds/SmallBanner";

const BannerGroup = () => {
    return (
        <PageSpace className={'flex flex-col items-center gap-10'}>
            <BigBanner/>
            <MediumBanner/>
            <SmallBanner/>
        </PageSpace>
    );
};

export default BannerGroup;