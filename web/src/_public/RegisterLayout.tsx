import React from 'react';
import {Outlet} from "react-router-dom";
import FillScreenWrapper from "@/components/utils/FiilScreenWrapper.tsx";
import AuthHeader from "@/components/public/AuthHeader.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";

function RegisterLayout(props) {
    return (
        <FillScreenWrapper className={'bg-gray-950'}>
            <AuthHeader/>
            <Outlet/>
            <Toaster />
        </FillScreenWrapper>
    )

}

export default RegisterLayout;