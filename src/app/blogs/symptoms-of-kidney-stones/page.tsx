import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function KidneyStoneBlogPage() {
    const list = [
        {
            listTitle: 'Severe pain in back, side or groin',
            listData: [
                "Sharp, intense pain under the ribs on one side (flank pain).",
                "The pain may move downward toward lower belly or groin. In men, this may radiate to testicles; in women, to the labia.",
                "Pain often comes in waves (“colicky pain”), changing its intensity."
            ]
        },
        {
            listTitle: 'Pain with urination or frequent urge to urinate',
            listData: [
                "Burning or stinging feeling when you pass urine.",
                "Feeling like you must pee more often than usual. "
            ]
        },
        {
            listTitle: 'Blood in urine (Hematuria)',
            listData: [
                "Urine may look pink, red, or brown. Sometimes blood is visible only under microscope."
            ]
        },
        {
            listTitle: 'Changes in urine appearance or smell',
            listData: [
                "Urine may be cloudy or have a foul smell."
            ]
        },
        {
            listTitle: 'Nausea and vomiting',
            listData: [
                "The pain can trigger nausea, and sometimes vomiting. This occurs especially when stone causes very strong pain or obstruction. "
            ]
        },
        {
            listTitle: 'Fever, chills, or signs of infection',
            listData: [
                "If a stone causes blockage and infection (urinary tract infection or kidney infection), there may be fever, chills, shivering.",
                "Standing out symptom: feeling very weak or tired. "
            ]
        },
        {
            listTitle: 'Reduced or blocked urine flow',
            listData: [
                "You may feel you cannot empty your bladder completely or have trouble urinating if the stone is large and blocking the path."
            ]
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-4xl mx-auto'>
                    <h1 className='md:text-4xl text-dark-navy font-bold'>
                        Symptoms of Kidney Stones
                    </h1>
                    <span className='text-sm italic font-normal text-zinc-700 block mt-2'>
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>
                    <Image src='/images/blog/blog-1.jpg'
                        width={500}
                        height={400}
                        alt='Symptoms of Kidney Stones'
                        className='mt-7 w-full rounded-2xl'
                    />
                    <div className='mt-5 flex flex-col gap-4'>
                        <Subheading className='text-left'>
                            Kidney stones are hard mineral masses inside your kidneys or urinary tract. They can be very painful, but knowing the symptoms early helps in quick treatment and avoiding complications. Here are the common signs and what to watch out for.
                        </Subheading>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What Are Kidney Stones?
                        </h2>
                        <Subheading className='text-left'>
                            Kidney stones (also called renal calculi or nephrolithiasis) form when wastes like calcium, oxalate, uric acid and other substances crystallize in the urine. Normally urine contains chemicals that prevent crystals, but if those chemicals are out of balance, or if you don&apos;t drink enough fluids, stones may form. Smaller stones may pass without causing much problem. Larger ones may block the flow of urine, causing pain and other symptoms.
                        </Subheading>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            When Do Symptoms Appear?
                        </h2>
                        <Subheading className='text-left'>
                            You may not feel anything while a stone is in the kidney and not moving. Symptoms usually begin when the stone moves or blocks part of the urinary tract (for example, the ureter, which is the tube connecting kidney to bladder). When this happens, pain or other signs often follow.
                        </Subheading>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Common Symptoms of Kidney Stones
                        </h2>
                        <Subheading className='text-left'>
                            Here are the symptoms people often experience. It&apos;s good to know them so you can consult early if they show up.
                        </Subheading>
                        <ul className='flex flex-col gap-3 list-decimal pl-5'>
                            {
                                list.map((items, idx) => (
                                    <li className='md:text-lg text-dark-navy font-medium' key={idx + 2}>
                                        {items.listTitle}
                                        <ul className='mt-2 flex flex-col gap-1 list-disc pl-5 md:text-base text-sm text-zinc-600 text-normal'>
                                            {
                                                items.listData.map((lst, id) => (
                                                    <li key={id}>{lst}</li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What Symptoms Mean Emergency
                        </h2>
                        <Subheading className='text-left'>
                            Some symptoms need fast action. If you feel any of the following, see a specialist like Dr. Satyanarayana Garre without delay:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>
                                High fever with chills.
                            </li>
                            <li>
                                Severe pain that does not get better with normal pain medicine.
                            </li>
                            <li>
                                Vomiting so badly you cannot keep fluids down.
                            </li>
                            <li>
                                Reduced or stopped urination.
                            </li>
                            <li>
                                Blood in urine plus signs of infection (cloudy urine, foul smell, pain with urination).
                            </li>
                        </ul>
                        <Subheading className='text-left'>
                            These may signal complications such as urinary tract infection, kidney damage, or blocked kidney.
                        </Subheading>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            How Doctors Diagnose Kidney Stones
                        </h2>
                        <Subheading className='text-left'>
                            Doctors usually ask about your symptoms and may do some tests:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>Urine test: to check for blood, crystals, and infection.</li>
                            <li>Blood tests: to see kidney function, possible mineral imbalances.</li>
                            <li>Imaging: ultrasound or CT scan to locate the stone, size, and if there is blockage.</li>
                        </ul>
                        <Subheading className='text-left'>
                            Early diagnosis helps in planning treatment—maybe medications, drinking more water, or in some cases procedures to remove or break the stone.
                        </Subheading>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Tips to Reduce Risk & What You Should Do
                        </h2>
                        <Subheading className='text-left'>
                            Although this blog is about symptoms, knowing what to do can help after symptoms begin:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>Increase fluid intake (water). More urine helps wash out small stones.</li>
                            <li>Observe your urine: colour, smell, presence of blood.</li>
                            <li>Do not delay when symptoms appear—severe pain, infection signs, or blocked urine need medical attention.</li>
                            <li>Follow advice on diet and lifestyle to reduce chance of new stones forming.</li>
                        </ul>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Conclusion
                        </h2>
                        <Subheading className='text-left'>
                            Kidney stones often begin without any warning, but once they move or block the urinary tract, they cause strong symptoms. Knowing these symptoms helps you seek help early, reducing pain, preventing infections, and avoiding kidney damage.
                            <br />
                            If you or someone you know in Hyderabad has symptoms like sharp back or side pain, blood in urine, fever, or vomiting, don&apos;t wait. Contact Dr. Satyanarayana Garre, Nephrologist, for examination, diagnosis, and treatment.
                        </Subheading>
                    </div>
                </div>
            </Wrapper >
        </Section >
    )
}
