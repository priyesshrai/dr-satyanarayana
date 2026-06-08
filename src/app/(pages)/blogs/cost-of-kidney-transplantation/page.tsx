import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Cost of Kidney Transplantation in India – Complete Guide",
    description:
        "Understand the cost of kidney transplantation in India, including surgery charges, hospital stay, and post-transplant medication. Explained by Dr. Satyanarayana Garre, Nephrologist in Hyderabad.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/cost-of-kidney-transplantation",
    },
}

export default function page() {
    return (
        <Section>
            <Wrapper>
                <div className="relative w-full max-w-4xl mx-auto">
                    <h1 className="md:text-4xl text-dark-navy font-bold">
                        Cost of Kidney Transplantation in India
                    </h1>
                    <span className="text-sm italic font-normal text-zinc-700 block mt-2">
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>

                    <Image
                        src="/images/blog/blog-7.jpg"
                        width={500}
                        height={400}
                        alt="Kidney Transplant Surgery in India"
                        className="mt-7 w-full rounded-2xl"
                    />

                    <div className="mt-5 flex flex-col gap-4">
                        <Subheading className="text-left">
                            A kidney transplant is one of the most effective treatments for patients with end-stage kidney disease.
                            It offers better quality of life, more stability, and long-term health benefits compared to dialysis.
                            However, understanding the overall cost of kidney transplantation is extremely important for patients
                            and families before moving forward.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            What Determines the Cost of a Kidney Transplant?
                        </h2>
                        <Subheading className="text-left">
                            The kidney transplant cost in India can vary from patient to patient depending on medical condition,
                            donor type, and hospital protocols. Before surgery, patients undergo detailed evaluations including
                            blood tests, compatibility matching, imaging scans, and specialist consultations.
                        </Subheading>
                        <Subheading className="text-left">
                            The type of donor plays a major role. Living donor transplants require medical evaluation of both donor
                            and recipient along with legal clearances. Deceased donor transplants involve registration and approval
                            from transplant authorities. Each step adds to kidney transplantation expenses.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Hospital Stay, Surgery, and Recovery Charges
                        </h2>
                        <Subheading className="text-left">
                            Kidney transplant surgery charges include operation costs, ICU care, hospital room charges,
                            nursing services, medicines, and diagnostic tests. Most patients stay in the hospital for several
                            days to ensure the new kidney is functioning well.
                        </Subheading>
                        <Subheading className="text-left">
                            During recovery, daily blood tests and close monitoring are essential. Though this increases short-term
                            costs, it is critical to prevent early complications and ensure transplant success.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Long-Term Medication and Follow-Up Costs
                        </h2>
                        <Subheading className="text-left">
                            After discharge, patients must take immunosuppressant medicines for life to prevent kidney rejection.
                            The post-transplant medication cost depends on drug type, dosage, and brand.
                        </Subheading>
                        <Subheading className="text-left">
                            Regular follow-up visits, blood tests, and urine tests are required—more frequently in the first year
                            and less often later. Lifelong monitoring is essential to protect the transplanted kidney.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Why Kidney Transplant Is Cost-Effective in the Long Run
                        </h2>
                        <Subheading className="text-left">
                            Although a kidney transplant involves significant initial expenses, it is more cost-effective than
                            lifelong dialysis. Dialysis requires repeated sessions, travel, and continuous medical care, which
                            often becomes more expensive over time.
                        </Subheading>
                        <Subheading className="text-left">
                            A successful transplant improves energy levels, independence, and quality of life. Many patients
                            also benefit from insurance coverage, government schemes, and financial assistance, making an
                            affordable kidney transplant possible in India.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Final Thoughts
                        </h2>
                        <Subheading className="text-left">
                            The overall cost of kidney transplantation depends on pre-transplant evaluations, donor type,
                            surgery charges, hospital stay, post-transplant medication, and lifelong follow-up care.
                            <br /><br />
                            While the expenses may feel overwhelming at first, a kidney transplant offers long-term health,
                            freedom from dialysis, and a better quality of life. With proper guidance from an experienced
                            nephrologist like Dr. Satyanarayana Garre, patients can plan effectively and make informed decisions.
                        </Subheading>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
