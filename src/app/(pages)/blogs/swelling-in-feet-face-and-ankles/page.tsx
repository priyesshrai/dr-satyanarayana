import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
    AlertCircle,
    CheckCircle,
    Droplets,
    Eye,
    HeartPulse,
    Activity,
    ShieldCheck,
    Clock,
    Stethoscope
} from 'lucide-react'

export const metadata: Metadata = {
    title: 'Swelling in Feet, Face & Ankles – Kidney Disease Signs You Should Never Ignore',
    description:
        'Learn how swelling in the feet, face, ankles, and around the eyes may be an early warning sign of kidney disease and when to seek medical attention.',
    alternates: {
        canonical:
            'https://www.drsatyanarayanagarre.in/blogs/swelling-in-feet-face-and-ankles',
    },
}

const swellingAreas = [
    {
        title: 'Swelling in Feet, Ankles, and Legs',
        icon: '🦶',
        points: [
            'Swollen feet and ankles',
            'Tight shoes that suddenly feel uncomfortable',
            'Heavy or tired legs',
            'Swelling that becomes worse by the end of the day',
        ],
    },
    {
        title: 'Puffiness Around the Eyes and Face',
        icon: '👁️',
        points: [
            'Swollen eyelids after waking up',
            'Puffy appearance around the eyes',
            'Facial swelling that does not improve easily',
        ],
    },
]

const kidneySymptoms = [
    'Frequent urination, especially at night',
    'Reduced urine output',
    'Foamy urine',
    'Blood in urine',
    'Pain while passing urine',
    'Constant fatigue',
    'High blood pressure',
    'Dry and itchy skin',
]

const specialistSigns = [
    'Swelling in the feet, ankles, face, or around the eyes',
    'High blood pressure',
    'Changes in urination',
    'Persistent tiredness',
    'Blood in urine',
    'A family history of kidney disease',
]

const diagnosisBenefits = [
    'Slow the progression of kidney disease',
    'Control blood pressure',
    'Reduce fluid retention',
    'Prevent kidney failure',
    'Improve overall quality of life',
]

export default function SwellingInFeetKidneyDiseasePage() {
    return (
        <Section>
            <Wrapper>
                <div className="relative w-full max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="mb-8">
                        <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4">
                            Nephrology Care · Hyderabad
                        </span>

                        <h1 className="text-3xl md:text-5xl font-bold text-dark-navy leading-tight mb-3">
                            Swelling in Feet, Face & Ankles –
                            <br className="hidden md:block" />
                            Kidney Disease Signs You
                            <br className="hidden md:block" />
                            Should Never Ignore
                        </h1>

                        <p className="text-zinc-500 text-sm italic mb-6">
                            By Dr. Satyanarayana Garre, Nephrology Specialist, Hyderabad
                        </p>

                        <div className="relative w-full rounded-2xl overflow-hidden">
                            <Image
                                src="/images/blog/Swelling-in-Feet-Face-and-Ankles.jpeg"
                                width={900}
                                height={480}
                                alt="Swelling in Feet Face and Ankles Kidney Disease Signs"
                                className="w-full object-cover"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6">
                                {[
                                    {
                                        label: 'Key Symptom',
                                        value: 'Swelling / Edema',
                                    },
                                    {
                                        label: 'Speciality',
                                        value: 'Nephrology',
                                    },
                                    {
                                        label: 'Focus',
                                        value: 'Early Detection',
                                    },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <p className="text-white/60 text-[10px] uppercase tracking-widest">
                                            {item.label}
                                        </p>
                                        <p className="text-white font-semibold text-sm">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">

                        {/* Intro */}
                        <div className="border-l-4 border-blue-500 pl-5">
                            <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                                Your kidneys work quietly every day to remove waste,
                                balance fluids, and keep your body healthy. When the
                                kidneys are not working properly, extra fluid can build up
                                in the body, leading to swelling in different areas. Many
                                people ignore this symptom, thinking it is due to tiredness
                                or standing for long hours. However, swelling can be one
                                of the early kidney disease signs and symptoms that should
                                not be overlooked.
                            </p>

                            <p className="text-zinc-600 leading-relaxed mt-4">
                                Understanding these warning signs can help detect kidney
                                problems early and prevent serious complications.
                            </p>
                        </div>

                        {/* Why Swelling Happens */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2">
                                <Droplets className="w-6 h-6 text-blue-500 shrink-0" />
                                Why Does Kidney Disease Cause Swelling?
                            </h2>

                            <Subheading className="text-left">
                                Healthy kidneys remove excess water and waste through
                                urine. When kidney function starts to decline, the body may
                                hold on to extra fluid and salt. This fluid collects in
                                different parts of the body and causes swelling, also known
                                as edema.
                            </Subheading>

                            <Subheading className="text-left mt-4">
                                Swelling caused by kidney disease usually develops slowly
                                and may become worse over time. It can affect daily
                                activities and may indicate that the kidneys need medical
                                attention.
                            </Subheading>

                            <Subheading className="text-left mt-4">
                                Among the common kidney disease signs, swelling is one of
                                the symptoms that many patients notice first.
                            </Subheading>
                        </div>

                        {/* Swelling Areas */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-5 flex items-center gap-2">
                                <Activity className="w-6 h-6 text-blue-500 shrink-0" />
                                Common Areas of Swelling
                            </h2>

                            <div className="flex flex-col gap-4">
                                {swellingAreas.map((item) => (
                                    <div
                                        key={item.title}
                                        className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{item.icon}</span>
                                            <h3 className="font-bold text-dark-navy text-lg">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            {item.points.map((point) => (
                                                <div
                                                    key={point}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                                                    <span className="text-zinc-600 text-sm">
                                                        {point}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Eye Puffiness */}
                        <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2">
                                <Eye className="w-6 h-6 text-blue-500 shrink-0" />
                                Puffiness Around the Eyes and Face
                            </h2>

                            <Subheading className="text-left">
                                Another early sign of kidney problems is swelling around
                                the eyes, especially in the morning.
                            </Subheading>

                            <Subheading className="text-left mt-4">
                                Damaged kidneys may allow protein to leak into the urine.
                                This can lead to fluid retention and cause puffiness around
                                the eyes and face.
                            </Subheading>

                            <p className="font-semibold text-dark-navy mt-6 mb-4">
                                You may notice:
                            </p>

                            <div className="grid sm:grid-cols-1 gap-3">
                                {[
                                    'Swollen eyelids after waking up',
                                    'Puffy appearance around the eyes',
                                    'Facial swelling that does not improve easily',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 bg-white rounded-xl border border-blue-100 px-4 py-3"
                                    >
                                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                                        <span className="text-sm text-zinc-700">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Other Signs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-4 flex items-center gap-2">
                                <HeartPulse className="w-6 h-6 text-blue-500 shrink-0" />
                                Other Kidney Disease Signs to Watch For
                            </h2>

                            <Subheading className="text-left mb-5">
                                Swelling is often accompanied by other symptoms of kidney
                                disease.
                            </Subheading>

                            <div className="grid md:grid-cols-2 gap-4">
                                {kidneySymptoms.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 border border-zinc-200 rounded-xl p-4"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                                        <span className="text-zinc-700 text-sm">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specialist */}
                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                                <h2 className="text-xl md:text-2xl font-bold text-dark-navy">
                                    When Should You See a Kidney Specialist?
                                </h2>
                            </div>

                            <Subheading className="text-left mb-5">
                                Many people ignore swelling until it becomes severe.
                                However, early treatment can help protect kidney function
                                and prevent future complications.
                            </Subheading>

                            <p className="font-semibold text-dark-navy mb-4">
                                You should consult a nephrologist if you have:
                            </p>

                            <div className="grid sm:grid-cols-2 gap-3">
                                {specialistSigns.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-2"
                                    >
                                        <CheckCircle className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                                        <span className="text-zinc-700 text-sm">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-sm text-amber-700">
                                People with diabetes and hypertension should have regular
                                kidney check-ups, as they are at a higher risk of
                                developing kidney disease.
                            </p>
                        </div>

                        {/* Early Diagnosis */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-blue-500 shrink-0" />
                                How Early Diagnosis Can Help
                            </h2>

                            <Subheading className="text-left mb-5">
                                Kidney disease often develops silently. By the time
                                symptoms become severe, significant kidney damage may
                                have already occurred.
                            </Subheading>

                            <div className="flex flex-col gap-3">
                                {diagnosisBenefits.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50"
                                    >
                                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                                        <span className="text-zinc-700 text-sm">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-5 text-zinc-600">
                                Simple blood tests and urine tests can help detect kidney
                                problems before they become serious.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className="rounded-2xl bg-dark-navy px-6 md:px-10 py-8 text-center">
                            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-4" />

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Conclusion
                            </h2>

                            <p className="text-zinc-300 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
                                Swelling in the feet, ankles, face, or around the eyes
                                should never be ignored. While there can be many causes of
                                swelling, it is also one of the important kidney disease
                                signs that may indicate underlying kidney damage.
                            </p>

                            <p className="text-zinc-300 leading-relaxed max-w-3xl mx-auto text-sm md:text-base mt-4">
                                Recognizing these chronic kidney disease signs and
                                symptoms early can make a big difference in treatment and
                                long-term kidney health. If you notice persistent swelling
                                or any other kidney-related symptoms, consult Dr.
                                Satyanarayana Garre, a nephrology specialist in Hyderabad,
                                for proper evaluation and treatment.
                            </p>

                            <p className="text-zinc-300 leading-relaxed max-w-3xl mx-auto text-sm md:text-base mt-4">
                                Taking action early can help protect your kidneys and
                                prevent serious health complications in the future.
                            </p>
                        </div>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}