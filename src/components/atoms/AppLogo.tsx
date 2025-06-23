"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";

const AppLogo = () => {
    const router = useRouter();
    return (
        <div className="flex-shrink-0 cursor-pointer" onClick={() => router.push('/')}>
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