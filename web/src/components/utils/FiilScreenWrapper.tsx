import {cn} from "@/lib/utils.tsx";
import {ReactNode} from "react";

type IParameters = {
    className?: string,
    children: ReactNode
}

function FillScreenWrapper({className, children}: IParameters) {
    return (
        // recebendo classes dinamicamente
        <div className={cn("w-screen h-screen", className)}>
            {children}
        </div>
    );
}

export default FillScreenWrapper