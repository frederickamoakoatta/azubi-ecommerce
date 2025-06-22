"use client";

import {useRouter} from "next/navigation";

const GoBack = () => {
    const router = useRouter();
    return (
        <div>
            <span className="cursor-pointer opacity-50 hover:underline"
                          onClick={() => router.back()}>Go back</span>
        </div>
    );
};

export default GoBack;