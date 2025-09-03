import React, { ButtonHTMLAttributes, CSSProperties } from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}
interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}

export function Section({ children, className, style }: Props) {
    return (
        <section className={className} style={style}>
            {children}
        </section>
    )
}
export function Wrapper({ children, className, style }: Props) {
    return (
        <div className={`${className ?? ''} w-full max-w-7xl relative mx-auto px-6`} style={style}>
            {children}
        </div>
    )
}
export function Heading({ children, className, style }: Props) {
    return (
        <h2 className={`${className ?? ''} lg:text-4xl md:text-[28px] text-2xl leading-[1.2] font-bold text-primary-dark`} style={style}>
            {children}
        </h2>
    )
}
export function Subheading({ children, className, style }: Props) {
    return (
        <p className={`${className ?? ''} lg:text-base text-sm text-zinc-600 mt-1 text-center font-medium`} style={style}>
            {children}
        </p>
    )
}
export function ButtonPrimary({ children, className, style, ...rest }: BtnProps) {
    return (
        <button className={`${className ?? ''} text-white bg-dark-navy md:text-base text-sm font-semibold px-5 h-14 border-none outline-none cursor-pointer transition-all duration-300 ease-linear hover:bg-hover-navy rounded-full`}
            {...rest}
            style={style}>
            {children}
        </button>
    )
}
export function ButtonSecondry({ children, className, style, ...rest }: BtnProps) {
    return (
        <button className={`${className ?? ''} text-white bg-light-blue md:text-base text-sm font-semibold px-5 h-14 border-none outline-none cursor-pointer transition-all duration-200 ease-linear hover:bg-hover-blue rounded-full`}
            {...rest}
            style={style}>
            {children}
        </button>
    )
}