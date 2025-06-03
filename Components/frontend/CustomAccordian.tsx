import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion"
export type FAQItems = {
    Q: string;
    A: string;
};
export function CustomAccordian({ FAQs }: { FAQs: FAQItems[] }) {


    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >

            {
                FAQs.map((FAQs, i) => {
                    return (
                        <AccordionItem key={i} value={FAQs.Q}>
                            <AccordionTrigger>{FAQs.Q}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    {FAQs.A}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    )
}
