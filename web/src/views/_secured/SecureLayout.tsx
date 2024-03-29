import {Outlet} from "react-router-dom";
import Footer from "@/components/shared/Footer.tsx";
import Header from "@/components/shared/Header.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import FillScreenWrapper from "@/components/utils/FiilScreenWrapper.tsx";
import {useUserContext} from "@/context/AuthContext.tsx";

function SecureLayout () {

    const {user} = useUserContext();

    return (
        <FillScreenWrapper className={''}>
            <Header user={user} className={''}/>
            <div className={'bg-gray-900 mt-[4rem]'}>
                <Outlet/>
            </div>
            <Footer hoverColor={'bg-calm-yellow'}></Footer>
            <Toaster/>
        </FillScreenWrapper>
    );

}

export default SecureLayout;
