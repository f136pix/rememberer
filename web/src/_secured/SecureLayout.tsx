import React from 'react';
import {Outlet} from "react-router-dom";
import FillScreenWrapper from "@/components/utils/FiilScreenWrapper.tsx";
import AuthHeader from "@/components/public/AuthHeader.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import Header from "@/components/shared/Header.tsx";
import Footer from "@/components/shared/Footer.tsx";
import {useUserContext} from "@/context/AuthContext.tsx";

function RegisterLayout(props) {
    const {user} = useUserContext()

    return (
        <FillScreenWrapper className={''}>
            <Header user={user} className={''}/>
            <div className={'bg-gray-900 mt-[4rem]'}>
                <Outlet/>
            </div>
            <Footer hoverColor={'bg-calm-yellow'}></Footer>
            <Toaster/>
        </FillScreenWrapper>
    )

}

export default RegisterLayout;