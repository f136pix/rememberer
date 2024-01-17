import FiilScreenWrapper from "@/components/utils/FiilScreenWrapper.tsx";
import HomeHeader from "@/components/public/HomeHeader.tsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import HomeAccordeon from "@/components/public/HomeAccordeon.tsx";
import Footer from "@/components/shared/Footer.tsx";
import FadeIn from "react-fade-in";

function HomePage(props) {
    return (
        <FiilScreenWrapper className={'bg-bg-calm-yellow flex flex-col gap-[4rem]'}>
            <HomeHeader/>
            <section className={'h-[25rem] flex flex-col justify-end text-gray-950'}>
                <FadeIn>
                    <h1 className={'font-bold text-[5rem] w-screen'}>START ORGANIZING NOW</h1>
                    <h1 className={'font-bold text-[5rem] w-screen'}>AND ACHIEVE YOUR OBJECTIVES</h1>
                </FadeIn>
            </section>
            <section className={'h-auto bg-gray-950 text-white'}>
                <HomeAccordeon className={'w-[50rem] mx-auto my-12'}></HomeAccordeon>
            </section>
            <section className={'bg-gray-950'}>

            </section>
            <Footer hoverColor={'text-bg-calm-yellow'}/>
        </FiilScreenWrapper>

    );
}

export default HomePage;