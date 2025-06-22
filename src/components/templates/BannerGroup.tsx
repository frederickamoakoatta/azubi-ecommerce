import React from 'react';
import PageSpace from "@/components/compounds/PageSpace";
import BigBanner from "@/components/compounds/BigBanner";
import MediumBanner from "@/components/compounds/MediumBanner";
import SmallBanner from "@/components/compounds/SmallBanner";

const BannerGroup = () => {
    return (
        <PageSpace className={'flex flex-col items-center gap-10 min-h-[160vh] h-[160vh]'}>
            <BigBanner/>
            <MediumBanner/>
            <SmallBanner/>
        </PageSpace>
    );
};

export default BannerGroup;