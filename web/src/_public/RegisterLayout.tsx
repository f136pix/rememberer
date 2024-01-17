import React from 'react';
import {Outlet} from "react-router-dom";
import FillScreenWrapper from "@/components/utils/FiilScreenWrapper.tsx";
import AuthHeader from "@/components/public/AuthHeader.tsx";

function RegisterLayout(props) {
    return (
        <FillScreenWrapper className={'bg-gray-950'}>
            <AuthHeader/>
            <Outlet/>
        </FillScreenWrapper>
    )

}

export default RegisterLayout;