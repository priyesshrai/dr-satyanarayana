import { Heading, Section, Subheading, Wrapper } from "@/utils/Section";
import { ArrowRight, Book, ShieldEllipsis, TestTubeDiagonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Highlight() {
  return (
    <Section className="relative overflow-hidden">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-light-blue/10 blur-3xl rounded-full" />
            <Image
              src="/images/about/img.svg"
              width={600}
              height={600}
              alt="Kidney Care & Dialysis"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-light-blue/20 bg-light-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-light-blue">
              <ShieldEllipsis size={14} />
              Dialysis & Kidney Care
            </span>

            <Heading className="mt-5 lg:!text-5xl md:!text-4xl !text-3xl leading-tight">
              Kidney Care & Dialysis Support in Hyderabad
            </Heading>

            <Subheading className="mt-6 text-left text-slate-600">
              At our clinic in Jubilee Hills, Hyderabad, patients receive
              comprehensive care for a wide range of kidney disorders. We focus
              on accurate diagnosis, modern treatment methods, and continuous
              monitoring to help patients maintain better kidney health and
              improve their quality of life.
            </Subheading>

          </div>

        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Highlight Card */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-light-blue/10 text-light-blue">
                <Book size={18} />
              </div>

              <h3 className="text-xl font-semibold text-light-blue">
                Understand Your KFT Report
              </h3>
            </div>

            <Subheading className="mt-4 text-left text-slate-600">
              Many people feel worried after seeing their KFT report because of unfamiliar words and numbers like creatinine or eGFR. It is completely normal to feel confused at first. But understanding your KFT report can actually help you take better care of your kidneys and overall health.
            </Subheading>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/kft-report-guide"
                className="inline-flex items-center gap-2 rounded-full bg-light-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:translate-x-1"
              >
                Learn More About KFT Reports
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Highlight Card */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 flex flex-col">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-dark-navy/10 text-dark-navy">
                <TestTubeDiagonal size={18} />
              </div>

              <h3 className="text-xl font-semibold text-dark-navy">
                Understanding Creatinine Levels
              </h3>
            </div>

            <Subheading className="mt-4 text-left text-slate-600">
              Our kidneys quietly work every day to keep the body healthy. They remove waste, balance fluids, and help the body function properly. One important way to check how well the kidneys are working is by looking at creatinine levels.
            </Subheading>

            {/* CTA */}
            <div className="md:mt-auto mt-6">
              <Link
                href="/understand-creatinine-levels"
                className="inline-flex items-center gap-2 rounded-full bg-dark-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:translate-x-1"
              >
                Learn More Creatinine Levels
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </Wrapper>
    </Section>
  );
}