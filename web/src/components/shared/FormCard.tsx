import * as React from "react";
import { ReactNode } from "react";

import AuthForm from "@/components/forms/AuthForm.tsx";
import {
    Card
} from "@/components/ui/card";
import {cn} from "@/lib/utils.tsx";


export function FormCard({children, className}) {
    return (
        <Card className={cn("w-5/12 h-[30rem] mx-auto bg-gray-950 mb-14", className)}>
            {children}
        </Card>
    );
}

