import {Link} from "react-router-dom";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion.tsx";

type IParameters = {
    className?: string,
}

function HomeAccordeon({className}: IParameters) {
    return (
        <Accordion type="single" collapsible className={className}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it free?</AccordionTrigger>
                <AccordionContent>
                    Yes, you can create your account and use it for free!
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it multimedia?</AccordionTrigger>
                <AccordionContent>
                    By now, the app is only desktop friendly, but i'm working on this.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Wich stack it developed in?</AccordionTrigger>
                <AccordionContent>
                    <a>The backend was developed in Laravel and the front-end in React.js, you can see more about it in the repository </a><Link className={'font-bold'} to={'https://github.com/f136pix'}>here</Link>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

export default HomeAccordeon;