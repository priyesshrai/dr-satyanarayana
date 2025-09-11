'use client';
import { X } from 'lucide-react'
import Image from 'next/image'
import React, { Dispatch, useState } from 'react'
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { motion } from 'motion/react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
function formatDate(date: Date | undefined) {
    if (!date) {
        return ""
    }
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}
function isValidDate(date: Date | undefined) {
    if (!date) {
        return false
    }
    return !isNaN(date.getTime())
}

export default function AppointmanetForm({ closeForm }: { closeForm: Dispatch<React.SetStateAction<boolean>> }) {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(
        new Date("2025-06-01")
    )
    const [month, setMonth] = useState<Date | undefined>(date)
    const [value, setValue] = useState(formatDate(date))
    return (
        <motion.div className="fixed inset-0 w-full min-h-screen bg-black/30 backdrop-blur-[4px] p-5 flex justify-center items-start overflow-y-auto z-50" data-lenis-prevent
            key="appointment-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div className="w-full max-w-xl bg-white rounded-2xl md:p-5 p-3 relative mt-10 mb-10"
                key="appointment-form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full flex items-center justify-between">
                    <Image
                        src="/images/logo/logo.svg"
                        alt="Dr. Satyanarayana"
                        width={250}
                        height={40}
                    />
                    <button className="w-10 h-10 rounded-full bg-dark-navy flex items-center justify-center cursor-pointer" onClick={() => closeForm(false)}>
                        <X color="white" />
                    </button>
                </div>

                <form className="mt-10">
                    <div className="flex flex-col gap-3">
                        <div className="w-full px-2.5 py-3 border border-dark-navy rounded-lg">
                            <input
                                type="text"
                                placeholder="Patient Name"
                                name="name"
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                        </div>
                        <div className="w-full px-2.5 py-3 border border-dark-navy rounded-lg">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                        </div>
                        <div className="w-full px-2.5 py-3 border border-dark-navy rounded-lg">
                            <input
                                type="tel"
                                placeholder="Phone No."
                                name="phone"
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                        </div>

                        <div className="w-full relative px-2.5 py-3 border border-dark-navy rounded-lg flex items-center justify-between">
                            <input
                                placeholder="Preferred Date"
                                name="date"
                                value={value}
                                onChange={(e) => {
                                    const date = new Date(e.target.value);
                                    setValue(e.target.value);
                                    if (isValidDate(date)) {
                                        setDate(date);
                                        setMonth(date);
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "ArrowDown") {
                                        e.preventDefault();
                                        setOpen(true);
                                    }
                                }}
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        id="date-picker"
                                        variant="ghost"
                                        className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                                    >
                                        <CalendarIcon className="size-3.5 text-dark-navy cursor-pointer" />
                                        <span className="sr-only">Select date</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto overflow-hidden p-0"
                                    align="end"
                                    alignOffset={-8}
                                    sideOffset={10}
                                >
                                    <Calendar
                                        className="!bg-dark-navy !text-white"
                                        mode="single"
                                        selected={date}
                                        captionLayout="dropdown"
                                        month={month}
                                        onMonthChange={setMonth}
                                        onSelect={(date) => {
                                            setDate(date);
                                            setValue(formatDate(date));
                                            setOpen(false);
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="w-full px-2.5 py-3 border border-dark-navy rounded-lg">
                            <input
                                type="file"
                                placeholder="Upload any previous prescription/report"
                                name="report"
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                        </div>
                        <div className="w-full px-2.5 py-3 border border-dark-navy rounded-lg">
                            <textarea
                                placeholder="Details/Message"
                                name="message"
                                rows={4}
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                        </div>
                    </div>

                    <div className="w-full mt-6 mb-4">
                        <button
                            type="submit"
                            className="w-full bg-dark-navy text-white rounded-lg font-medium py-4"
                        >
                            Book Now
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>

    )
}
