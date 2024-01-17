import {FormCard} from "@/components/shared/FormCard.tsx";
import Footer from "@/components/shared/Footer.tsx";
import AuthForm from "@/components/forms/AuthForm.tsx";

function AuthPage(props) {
    return (
        <div>
        <div className={'bg-bg-calm-peach flex flex-col h-[50rem]'}>
            <FormCard className={'mt-14 h-auto'}>
                <AuthForm/>
            </FormCard>
        </div>
            <Footer hoverColor={'text-bg-calm-peach'}/>
        </div>
    );
}

export default AuthPage;