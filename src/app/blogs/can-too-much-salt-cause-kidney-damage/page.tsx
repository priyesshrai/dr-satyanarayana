import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About Dr. Monica’s Dental Clinic | Best Dentist in Varanasi",
    description: "Discover Dr. Monica’s Dental Clinic in Varanasi – offering advanced dental treatments, expert dentists, modern technology & 15+ years of trusted patient care.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/can-too-much-salt-cause-kidney-damage",
    },
}


export default function page() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-4xl mx-auto'>
                    <h1 className='md:text-4xl text-dark-navy font-bold'>
                        Can Too Much Salt Cause Kidney Damage?
                    </h1>
                    <span className='text-sm italic font-normal text-zinc-700 block mt-2'>
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>
                    <Image src='/images/blog/blog-4.jpg'
                        width={500}
                        height={400}
                        alt='Symptoms of Kidney Stones'
                        className='mt-7 w-full rounded-2xl'
                    />
                    <div className='mt-5 flex flex-col gap-4'>
                        <Subheading className='text-left'>
                            Salt is something we all use - in cooking, in packaged foods, and at the table. A small amount of salt (sodium) is necessary for our body to work properly. But when salt intake is too high, it can start to harm our kidneys. In this blog, we&apos;ll explain how that happens, who is at risk, what the signs are, and what you can do to protect your kidneys.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What Salt Does in the Body
                        </h2>
                        <Subheading className='text-left'>
                            First, a little about how salt (sodium) works in the body. Sodium helps:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>Maintain fluid balance (how much water is inside and outside your cells)</li>
                            <li>Conduct nerve signals </li>
                            <li>Help muscles work</li>
                        </ul>
                        <Subheading className='text-left'>
                            The kidneys play a key role in managing sodium. They filter blood, remove extra sodium and water, and keep what the body needs. If there is too much salt, the kidneys need to remove more. When this happens repeatedly over time, salt puts stress on kidney filtering units.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            How Too Much Salt Can Cause Kidney Damage
                        </h2>
                        <Subheading className='text-left'>
                            Here are the main ways excess salt can harm kidneys:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-decimal pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>
                                <strong className='text-dark-navy'>High Blood Pressure (Hypertension):</strong> Eating a lot of salt causes your body to retain more water. More water in blood vessels raises blood volume, which increases blood pressure. High blood pressure forces the tiny filtering units (glomeruli) in kidneys to work harder and over time they damage. Hypertension is a major cause of chronic kidney disease.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Proteinuria (Protein in Urine):</strong> Salt can increase the amount of protein that leaks into urine. Healthy kidneys normally prevent protein from escaping blood into urine. When glomeruli are damaged (often from high pressure or rigidity), protein leaks, which is a warning sign for kidney damage.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Direct Damage to Kidney Tissue:</strong> Beyond effects through blood pressure, studies show that very high salt intake can lead to physical changes in kidney tissue—thickening, fibrosis (scarring), and changes in kidney blood flow. These changes reduce the ability of kidneys to filter properly.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Blunting the Effects of Kidney-Protective Drugs:</strong> For people who already have kidney disease or high blood pressure and are taking medicines like ACE inhibitors (or similar drugs), high salt intake can reduce how well these medicines work. That means damage continues faster.
                            </li>
                        </ul>


                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Who is More at Risk
                        </h2>
                        <Subheading className='text-left'>
                            Not everyone is equally harmed by high salt. Some people are more vulnerable:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>Those with existing kidney disease or reduced kidney function</li>
                            <li>People with diabetes</li>
                            <li>Those with high blood pressure or hypertension </li>
                            <li>Older adults </li>
                            <li>People who are salt-sensitive (their blood pressure rises more than average in response to salt) </li>
                        </ul>
                        <Subheading className='text-left'>
                            If you are in any of these groups, keeping salt intake low is especially important.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What Studies Show (Evidence)
                        </h2>
                        <Subheading className='text-left'>
                            Recent studies provide strong evidence:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>A large review found that higher dietary sodium is associated with worse kidney outcomes, including earlier need for dialysis or transplant. </li>
                            <li>Another study (UK Biobank) of over 460,000 people found that people who frequently add salt to their food had a higher risk of developing chronic kidney disease (CKD). </li>
                            <li>Experimental studies show that even independent of blood pressure, high salt intake causes structural changes in the kidneys (fibrosis, increased filter pressure). </li>
                        </ul>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Signs You Should Watch For
                        </h2>
                        <Subheading className='text-left'>
                            If too much salt is affecting your kidneys, you might notice:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>Swelling in ankles, feet, or hands (due to fluid retention) </li>
                            <li>High blood pressure that&apos;s hard to control</li>
                            <li>Protein in urine (detected by urine test)</li>
                            <li>Feeling bloated or puffed up</li>
                            <li>Weight gain from water retention</li>
                            <li>If damage is more advanced: tiredness, loss of appetite, nausea, fluid in lungs or shortness of breath</li>
                        </ul>
                        <Subheading className='text-left'>
                            If you detect any of these, especially in combination, it&apos;s time to consult a nephrologist like Dr. Satyanarayana Garre.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            How Much Salt is Safe
                        </h2>
                        <Subheading className='text-left'>
                            Most guidelines say:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>For a healthy adult, daily sodium intake should be less than 2300 mg (≈ 1 teaspoon of salt). </li>
                            <li>For people with kidney disease, hypertension, or diabetes, the safe limit may be lower (often around 1500 mg per day) depending on individual health and doctor&apos;s advice. </li>
                        </ul>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What You Can Do to Protect Your Kidneys
                        </h2>
                        <Subheading className='text-left'>
                            Here are practical steps you (or patients) can take:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-decimal pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>
                                <strong className='text-dark-navy'>Read food labels:</strong> Many processed or packaged foods have high hidden sodium.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Cook at home:</strong> fresh ingredients let you control how much salt you use. Use herbs, spices instead of table salt.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Limit processed, canned, fast-foods:</strong> these often contain high levels of salt.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Flush out with water:</strong> staying well hydrated helps kidneys remove excess sodium.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Follow your doctor&apos;s advice:</strong> especially if you have diabetes, high blood pressure, or kidney disease. Your doctor may recommend tools or diets (e.g. DASH diet) to limit salt.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Regular monitoring:</strong> blood pressure checks; urine test for protein (albumin); kidney function tests (creatinine, eGFR).
                            </li>
                        </ul>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Conclusion
                        </h2>
                        <Subheading className='text-left'>
                            In summary, yes — consuming too much salt can damage your kidneys over time. The damage may come by raising blood pressure, causing proteinuria, directly stressing kidney tissue, or making medicines less effective. For people who already have health issues (diabetes, high blood pressure, kidney disease), it&apos;s especially dangerous.
                            <br /><br />
                            The good news is that reducing salt in your diet is one of the simpler lifestyle changes you can make with a big impact. If you are in or near Hyderabad and worried about your kidney health, reach out to Dr. Satyanarayana Garre. Early detection and small changes can help protect your kidneys and avoid more serious problems later.
                        </Subheading>
                    </div>
                </div>
            </Wrapper >
        </Section >
    )
}
