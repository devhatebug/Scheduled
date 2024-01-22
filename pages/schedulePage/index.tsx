"use client"
import clsx from "clsx";
import style from "./schedule.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Calendar from "@/layouts/calendar/calendar";

export default function Schedule() {
    return (
        <div className={clsx(style.schedulePage)}>
            <div className={clsx(style.calendarContainer)}>
                <div className={clsx(style.dataCalendar)}>
                    <Calendar />
                </div>
                <div className={clsx(style.calendar)}></div>
            </div>
            <div className={clsx(style.editCalendar)}></div>
        </div>
    )
}