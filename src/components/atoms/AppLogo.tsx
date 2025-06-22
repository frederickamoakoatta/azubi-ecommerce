import React from 'react';
import Image from "next/image";

const AppLogo = () => {
    return (
        <div className="flex-shrink-0">
            <Image
                src="/images/audiophile-logo.svg"
                alt="Logo"
                width={143}
                height={25}
                className="cursor-pointer"
            />
        </div>
    );
};

export default AppLogo;