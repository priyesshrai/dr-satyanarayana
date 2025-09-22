'use client';
import { X } from 'lucide-react'
import Image from 'next/image'
import React, { ChangeEvent, Dispatch, FormEvent, useState } from 'react'
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { motion } from 'motion/react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
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
interface AppointmentData {
    pname: string;
    email: string;
    phone: string;
    message: string
}

export default function AppointmanetForm({ closeForm }: { closeForm: Dispatch<React.SetStateAction<boolean>> }) {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [month, setMonth] = useState<Date | undefined>(date)
    const [value, setValue] = useState(formatDate(new Date()))
    const [loading, setLoading] = useState<boolean>(false)

    const [appointmentData, setAppointmentData] = useState<AppointmentData>({
        pname: '',
        email: '',
        phone: '',
        message: ''
    })
    const [report, setReport] = useState<FileList | null>()

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        e.preventDefault();
        const { name, value } = e.target
        setAppointmentData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (files) {
            const maxSize = 10 * 1024 * 1024;
            for (let i = 0; i < files.length; i++) {
                if (files[i].size > maxSize) {
                    toast.error(`❌ ${files[i].name} exceeds 10MB limit!`);
                    e.target.value = "";
                    break;
                }
            }
        }
        setReport(files);
    }
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true)
        const formData = new FormData();
        formData.append('pname', appointmentData.pname)
        formData.append('email', appointmentData.email)
        formData.append('phone', appointmentData.phone)
        formData.append('message', appointmentData.message)
        formData.append('date', value)
        for (let i = 0; i < report!.length; i++) {
            formData.append('report', report![i])
        }

        try {
            await toast.promise(
                axios
                    .post("/api/v1/appointment", formData)
                    .then((response) => {
                        if (response.status === 200) {
                            setAppointmentData({
                                pname: "",
                                email: "",
                                phone: "",
                                message: "",
                            });
                            setReport(null);
                            closeForm(false);
                            setLoading(false)
                            return response.data.message || "Message sent successfully!";
                        } else {
                            return response.data.message || "Something went wrong!";
                            setLoading(true);
                        }
                    })
                    .catch((error) => {
                        console.error("Error sending message:", error.message);
                        setLoading(true);
                        throw new Error("Failed to send message");
                    }),
                {
                    loading: "Sending message...",
                    success: (message) => message,
                    error: (err) => err.message || "Something went wrong",
                }
            );
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Something went wrong");
        }
    }

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

                <form className="mt-10" onSubmit={handleSubmit} >
                    <div className="flex flex-col gap-3">
                        <div className="w-full px-2.5 py-3 border border-dark-navy rounded-lg">
                            <input
                                type="text"
                                placeholder="Patient Name"
                                name="pname"
                                value={appointmentData.pname}
                                onChange={handleChange}
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                        </div>
                        <div className="w-full px-2.5 py-3 border border-dark-navy rounded-lg">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={appointmentData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                        </div>
                        <div className="w-full px-2.5 py-3 border border-dark-navy rounded-lg">
                            <input
                                type="tel"
                                placeholder="Phone No."
                                name="phone"
                                value={appointmentData.phone}
                                onChange={handleChange}
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
                                multiple
                                max={5}
                                placeholder="Upload any previous prescription/report"
                                name="report"
                                onChange={handleFileChange}
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                        </div>
                        <div className="w-full px-2.5 py-3 border border-dark-navy rounded-lg">
                            <textarea
                                placeholder="Details/Message"
                                name="message"
                                value={appointmentData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-transparent text-dark-navy text-lg font-montserrat outline-none font-medium"
                            />
                        </div>
                    </div>

                    <div className="w-full mt-6 mb-4">
                        <button
                            type="submit"
                            className="w-full bg-dark-navy text-white rounded-lg font-medium py-4 cursor-pointer"
                        >
                            {!loading ? "Book Appointment " : "Sending..."}
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>

    )
}
