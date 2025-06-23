import {ReactNode} from "react";
import clsx from "clsx";

interface PageSpaceProps {
    className?: string
    children: ReactNode;
}

const PageSpace = ({children, className} : PageSpaceProps) => {
    return (
        <div className={clsx(`px-40 py-10`, className)}>
            {children}
        </div>
    );
};

export default PageSpace;