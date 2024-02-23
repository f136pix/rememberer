import FadeIn from "react-fade-in";

import HomeAccordeon from "@/components/public/HomeAccordeon.tsx";
import HomeHeader from "@/components/public/HomeHeader.tsx";
import Footer from "@/components/shared/Footer.tsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import FiilScreenWrapper from "@/components/utils/FiilScreenWrapper.tsx";

function HomePage(props) {
    return (
        <FiilScreenWrapper className={'bg-bg-calm-yellow flex flex-col'}>
            <HomeHeader/>
            <section className={'h-[25rem] flex flex-col justify-end text-gray-950 mt-[4rem]'}>
                <FadeIn>
                    <h1 className={'font-bold text-[5rem] w-screen'}>START ORGANIZING NOW</h1>
                    <h1 className={'font-bold text-[5rem] w-screen'}>AND ACHIEVE YOUR OBJECTIVES</h1>
                </FadeIn>
            </section>
            <section className={'h-auto bg-gray-950 text-white mt-[4rem]'}>
                <HomeAccordeon className={'w-[50rem] mx-auto my-12'}></HomeAccordeon>
            </section>
            <section className={'h-[4rem] mt-[2rem]  '}>

            </section>
            <Footer hoverColor={'text-bg-calm-yellow'}/>
        </FiilScreenWrapper>

    );
}

export default HomePage;