'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Heading, Subheading } from "@/utils/Section"

export default function FAQ() {
    return (
        <Accordion type="single" collapsible defaultValue="item-1" className="max-w-2xl">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <h2 className='text-lg font-semibold text-dark-navy'>
                        Is high BUN always due to kidney failure?
                    </h2>
                </AccordionTrigger>
                <AccordionContent>
                    <Subheading className='text-left'>
                        No. Dehydration, fever, or high-protein diet can also increase BUN.
                    </Subheading>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <h2 className='text-lg font-semibold text-dark-navy'>
                        Can dehydration cause high BUN?
                    </h2>
                </AccordionTrigger>
                <AccordionContent>
                    <Subheading className='text-left'>
                        Yes. It's one of the most common reversible causes.
                    </Subheading>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>
                    <h2 className='text-lg font-semibold text-dark-navy'>
                        Does a high-protein diet increase BUN?
                    </h2>
                </AccordionTrigger>
                <AccordionContent>
                    <Subheading className='text-left'>
                        Yes. Protein breakdown produces more urea.
                    </Subheading>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>
                    <h2 className='text-lg font-semibold text-dark-navy'>
                        Is BUN the same as creatinine?
                    </h2>
                </AccordionTrigger>
                <AccordionContent>
                    <Subheading className='text-left'>
                        No. Creatinine reflects muscle metabolism; BUN reflects protein metabolism and hydration.
                    </Subheading>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
