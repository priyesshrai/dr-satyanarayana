import { Role } from "@/app/generated/prisma/enums";
import {
    LayoutDashboard,
    CalendarPlus,
    Upload,
    FileText,
    FolderOpen,
    MessageSquare,
    User,
    CalendarCheck,
    CalendarClock,
    Users,
    FilePlus,
    CreditCard,
    BarChart3,
    Settings,
    ClockPlus,
    Book
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export type DashboardMenuType = {
    name: string;
    icon: LucideIcon;
    page: string;
    access: Role[];
    nextTab: boolean
};

export const UserDashboardMenu: DashboardMenuType[] = [
    {
        name: "Dashboard",
        page: "/user/dashboard",
        icon: LayoutDashboard,
        access: ["PATIENT"],
        nextTab: false
    },
    {
        name: "Book Appointment",
        page: "/user/book-appointments",
        icon: CalendarPlus,
        access: ["PATIENT"],
        nextTab: false
    },
    // {
    //     name: "Upload Prescriptions",
    //     page: "/user/prescriptions/upload",
    //     icon: Upload,
    //     access: ["PATIENT"],
    // },
    {
        name: "View Prescriptions",
        page: "/user/prescriptions",
        icon: FileText,
        access: ["PATIENT"],
        nextTab: false
    },
    {
        name: "Medical Records",
        page: "/user/records",
        icon: FolderOpen,
        access: ["PATIENT"],
        nextTab: false
    },
    {
        name: "Conversation History",
        page: "/user/messages",
        icon: MessageSquare,
        access: ["PATIENT"],
        nextTab: false
    },
    {
        name: "Profile",
        page: "/user/profile",
        icon: User,
        access: ["PATIENT"],
        nextTab: false
    },
    {
        name: "User Manual",
        page: "/file/Patient_User_Manual.pdf",
        icon: Book,
        access: ["PATIENT"],
        nextTab: true
    },
];

export const DoctorDashboardMenu: DashboardMenuType[] = [
    // {
    //     name: "Dashboard",
    //     page: "/doctor/dashboard",
    //     icon: LayoutDashboard,
    //     access: ["DOCTOR"],
    // },
    {
        name: "Appointments",
        page: "/doctor/appointments",
        icon: CalendarCheck,
        access: ["DOCTOR"],
        nextTab: false
    },
    {
        name: "Time Slots",
        page: "/doctor/time_slots",
        icon: CalendarClock,
        access: ["DOCTOR"],
        nextTab: false
    },
    {
        name: "Create Time Slots",
        page: "/doctor/time_slots/create",
        icon: ClockPlus,
        access: ["DOCTOR"],
        nextTab: false
    },
    {
        name: "Set Availability",
        page: "/doctor/set-availability",
        icon: CalendarClock,
        access: ["DOCTOR"],
        nextTab: false
    },
    {
        name: "Patients",
        page: "/doctor/patients",
        icon: Users,
        access: ["DOCTOR"],
        nextTab: false
    },
    {
        name: "Messages",
        page: "/doctor/messages",
        icon: MessageSquare,
        access: ["DOCTOR"],
        nextTab: false
    },
    {
        name: "Profile",
        page: "/doctor/profile",
        icon: User,
        access: ["DOCTOR"],
        nextTab: false
    },
    // {
    //     name: "Settings",
    //     page: "/doctor/settings",
    //     icon: Settings,
    //     access: ["DOCTOR"],
    // },
];
