import ProductOverlapGroup from "@/components/templates/ProductOverlapGroup";
import {ReactNode} from "react";

export default function CategoryLayout({children,}: { children: ReactNode }) {
    return (
        <section>
            {children}
            <ProductOverlapGroup/>
        </section>
    )
}