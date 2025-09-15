import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-xl mx-auto'>
                    <h1 className='md:text-4xl text-dark-navy font-bold'>
                        How Diabetes Causes Kidney Failure
                    </h1>
                    <span className='text-sm italic font-normal text-zinc-700 block mt-2'>
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>
                    <Image src='/images/blog/blog-3.jpg'
                        width={500}
                        height={400}
                        alt='Symptoms of Kidney Stones'
                        className='mt-7 w-full rounded-2xl'
                    />
                    <div className='mt-5 flex flex-col gap-4'>
                        <Subheading className='text-left'>
                            Diabetes is one of the leading causes of kidney disease around the world. When blood sugar is not well controlled over years, it gradually damages the kidneys until they can no longer do their job. This blog explains in plain language how diabetes causes kidney failure, so you can understand the processes, warning signs, and what to do early.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What Happens Inside Kidneys Normally
                        </h2>
                        <Subheading className='text-left'>
                            To understand how damage occurs, we first need to know how healthy kidneys work:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>
                                Your kidneys contain millions of tiny filtering units called nephrons. Each nephron has a filter called a glomerulus and a tubule. The glomerulus filters blood, keeping good things like protein and red blood cells in the blood, and letting waste and extra fluids pass. Healthy kidneys keep balance of fluids, waste, and important minerals.
                            </li>
                            <li>
                                After filtration, useful substances (water, minerals) are reabsorbed back into the blood, and the rest becomes urine.
                            </li>
                        </ul>
                        <Subheading className='text-left'>
                            When everything functions well, kidneys keep you healthy by filtering daily waste and maintaining proper fluid and chemical balance.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            How High Blood Sugar Damages Kidneys Over Time
                        </h2>
                        <Subheading className='text-left'>
                            Diabetes (both Type 1 and Type 2) can cause kidney damage through several harmful mechanisms. Here are the main ones:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-decimal pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>
                                <strong className='text-dark-navy'>Hyperfiltration & increased pressure:</strong> Early in diabetes, high glucose levels cause the kidneys to work harder: the glomeruli filter more blood than normal. This “over work” or hyperfiltration increases pressure inside these tiny filters which forces them to stretch and can damage them over time.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Thickening and scarring (glomerular damage):</strong> High blood sugar causes changes in the walls of glomeruli—thickening of membranes, expansion of mesangial matrix (the area around capillaries in glomeruli), and eventually formation of scar tissue. This reduces the efficiency of filtering.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Leakage of protein into urine (albuminuria / proteinuria):</strong> Because glomerular filters are damaged, proteins (especially albumin) start leaking out into the urine. Normally albumin is kept in the blood; its appearance in urine is an early sign of kidney damage.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>High blood pressure (hypertension) adds more harm:</strong> Diabetes often goes together with high blood pressure. Elevated pressure worsens damage to the glomeruli. Damaged filters make it harder to remove fluid and control salt, which further raises blood pressure in a vicious cycle.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Other pathways: inflammation, oxidative stress, hormonal changes:</strong> Beyond mechanical damage, high glucose also causes chemical damage: inflammation, oxidative (free radical) stress, harm to cells lining blood vessels, problems in kidney tubules, and changes in hormones that regulate kidney function. Over time, these changes accumulate.
                            </li>
                        </ul>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Stages of Diabetic Kidney Disease
                        </h2>
                        <Subheading className='text-left'>
                            Kidneys do not fail all at once. In people with diabetes, kidney damage usually develops slowly over several years. This condition is known as diabetic kidney disease (DKD) or diabetic nephropathy. Doctors divide it into stages to understand how the disease is progressing and when treatment should be started. Recognising these stages early makes it easier to protect kidney function for longer.
                        </Subheading>
                        <ul className='flex flex-col gap-1 pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>
                                <strong className='text-dark-navy'>Stage 1:</strong> In the first stage, the kidneys start working harder than usual, a process called hyperfiltration. At this point, kidney function is still normal or near normal. There are usually no symptoms, but tests may show a slight increase in kidney size or very mild changes.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Stage 2 and 3:</strong> As damage continues, the kidneys begin to leak protein into the urine, which is one of the first clear warning signs. This is known as microalbuminuria in the early stage and macroalbuminuria when the leakage gets worse. Patients may notice mild swelling in the feet or ankles, and blood pressure may start to rise. The estimated glomerular filtration rate (eGFR), which measures kidney function, also begins to decline.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Stage 4:</strong> In this stage, the loss of kidney function becomes more serious. Symptoms such as swelling in the hands and feet, tiredness, loss of appetite, and changes in urine output become more common. Blood pressure often stays high, and complications like anaemia can appear because the kidneys can no longer balance the body&apos;s functions properly.
                            </li>
                            <li>
                                <strong className='text-dark-navy'>Stage 5 (End-Stage Kidney Disease):</strong> This is the final stage, when the kidneys are no longer able to filter waste and excess fluids from the blood. The eGFR becomes very low, and most of the filtering units (nephrons) are badly damaged or lost. Patients may experience severe fluid retention, nausea, extreme weakness, and a dangerous build-up of waste in the blood. At this point, dialysis or a kidney transplant is needed to survive.
                            </li>
                        </ul>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Symptoms You May Notice (Late Stages)
                        </h2>
                        <Subheading className='text-left'>
                            Because early damage happens silently, many people with diabetes do not notice kidney problems until the later stages. When symptoms appear, they often include:
                            <br />
                            <br />
                            Swelling in ankles, hands, or face (edema)

                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>Foamy or bubbly urine (due to protein leaking) </li>
                            <li>Fatigue, weakness, and feeling unwell</li>
                            <li>Loss of appetite, nausea, sometimes vomiting</li>
                            <li>Shortness of breath (fluid buildup)</li>
                            <li>Trouble concentrating or mental fogginess</li>
                            <li>Elevated blood pressure, which may be harder to control </li>
                        </ul>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Why Kidney Failure Happens
                        </h2>
                        <Subheading className='text-left'>
                            If diabetes is not managed, the damage accumulates:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>Loss of many nephrons over time reduces overall kidney filtering capacity.</li>
                            <li>Glomeruli that remain may have increased workload, leading to more damage.</li>
                            <li>Persistent protein leakage worsens scarring; toxic wastes build up in blood.</li>
                            <li>High blood pressure, high blood sugar, and associated complications (like high cholesterol) accelerate damage.</li>
                            <li>Eventually the kidneys cannot maintain fluid/electrolyte balance; wastes accumulate, leading to kidney failure (also called end-stage renal disease, ESRD).</li>
                        </ul>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            How It Can Be Prevented or Slowed Down
                        </h2>
                        <Subheading className='text-left'>
                            Knowing how diabetes causes kidney failure, there are many ways to stop or slow the process. Early action makes a big difference.
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat'>
                            <li>Keep blood sugar under control — aim for HbA1c targets as advised by your doctor. Avoid high peaks of sugar.</li>
                            <li>Control blood pressure — even if it is mildly elevated, treating hypertension helps protect kidneys. Drugs like ACE inhibitors or ARBs are often useful. </li>
                            <li>Monitor kidney health regularly — annual (or more frequent) urine tests for albumin (albumin/creatinine ratio) and blood tests to measure eGFR and creatinine. Early presence of protein in urine is a red flag. </li>
                            <li>Lifestyle changes — healthy diet (less salt, moderate protein, avoid excess sugar), maintain healthy weight, stop smoking, regular exercise.</li>
                            <li>Treat other risk factors — high cholesterol, obesity, heart disease should be managed well.</li>
                            <li>Use medicines that protect kidneys — when needed, certain newer diabetes medicines also help reduce kidney damage in addition to controlling sugar.</li>
                        </ul>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Conclusion
                        </h2>
                        <Subheading className='text-left'>
                            Diabetes causes kidney failure through a silent, progressive process. High blood sugar damages the filtering system (nephrons), causes pressure and scarring, allows protein to leak, raises blood pressure, and slowly reduces kidney function. For many people, the early stages may have no symptoms. But with early detection through urine and blood tests, good control of blood sugar and blood pressure, and a healthy lifestyle, progression can be significantly slowed or prevented.
                            <br /><br />
                            If you are a person with diabetes, especially in Hyderabad or nearby, and want to check your kidney health, Dr. Satyanarayana Garre can help. Regular screening, careful monitoring, and early treatment can protect your kidneys for years. Don&apos;t wait until symptoms appear — protecting your kidneys starts today.
                        </Subheading>
                    </div>
                </div>
            </Wrapper >
        </Section >
    )
}
