"use client";
import React, {useState, useEffect} from "react";
import clsx from "clsx";
import style from "./formAddCalendar.module.css";

interface activeClose {
    onClose : () => void;
}

const AddCalendarForm : React.FC<activeClose> = ({onClose}) => {
    return (
        <div className={clsx(style.addCalendar)}>
            <div className={clsx(style.headForm)}>
                <button onClick={onClose} className={clsx(style.btnClose)}>close</button>
                <div className={clsx(style.titleForm)}>Thêm lịch học</div>
            </div>

            <div className={clsx(style.bodyyForm)}>
                <form method="POST" id="formAddCalendar">

                </form>
                <button form="formAddCalendar" type="submit" value="Tạo lịch">Tạo lịch</button>
            </div>
        </div>
    )
}

export default AddCalendarForm;