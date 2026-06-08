'use client';
import LoginForm from './login_form';

export default function Login() {
    return (
        <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg border border-slate-200">

                {/* ── Left: brand panel ── */}
                <div className="bg-dark-navy p-10 flex flex-col justify-between min-h-[540px]">

                    {/* Wordmark */}
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-hover-navy mb-1">
                            Patient Portal
                        </p>
                        <h1 className="text-2xl font-bold text-white leading-snug mb-1">
                            Dr. Satyanarayana<br />Garre
                        </h1>
                        <p className="text-sm text-teal-200">Nephrology &amp; Kidney Care</p>
                    </div>

                    {/* Feature list */}
                    <div className="flex flex-col gap-5 my-8">
                        {[
                            {
                                icon: (
                                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                                        <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
                                        <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                    </svg>
                                ),
                                title: 'Prescriptions & reports',
                                desc: 'Access your full medical history and prescription records.',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                                        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
                                        <path d="M2 8h16" stroke="currentColor" strokeWidth="1.4" />
                                        <path d="M6 12h2M10 12h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                    </svg>
                                ),
                                title: 'Book appointments',
                                desc: 'Schedule in-clinic or online consultations with ease.',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                                        <path d="M3 6l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
                                    </svg>
                                ),
                                title: 'Video consultations',
                                desc: 'Join secure video visits from the comfort of your home.',
                            },
                        ].map((f) => (
                            <div key={f.title} className="flex items-start gap-3.5">
                                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20
                  flex items-center justify-center text-teal-100 flex-shrink-0">
                                    {f.icon}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white mb-0.5">{f.title}</p>
                                    <p className="text-xs text-teal-200 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Clinic info card */}
                    <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                        <p className="text-xs font-bold text-white mb-1">Apollo Health City, Hyderabad</p>
                        <p className="text-xs text-teal-200 leading-relaxed">
                            Jubilee Hills · Road No. 72<br />
                            Mon–Sat · 10:30 AM – 6:00 PM<br />
                            +91 98441 81188
                        </p>
                    </div>

                </div>

                {/* ── Right: form panel ── */}
                <div className="bg-white p-10 flex flex-col justify-center">
                    <LoginForm />
                </div>

            </div>
        </div>
    );
}