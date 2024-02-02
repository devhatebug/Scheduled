"use client";
import React, {useState, useEffect} from "react";
import clsx from "clsx";
import style from "./formAddCalendar.module.css";

interface activeClose {
    onClose : () => void;
}

const AddCalendarForm : React.FC<activeClose> = ({onClose}) => {
    const dayOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    const [formOptionBtn, setFormOptionBtn] = useState(true);
    const [openAddCalendar, setOpenAddCalendar] = useState(false);
    const [openEditCalendar, setOpenEditCalendar] = useState(false);
    const [chooseDay, setChooseDay] = useState(false);

    const handleBackFormFirt = () => {
        setOpenAddCalendar(false);
        setFormOptionBtn(true);
    }
    const handleOpenAddCalendar = () => {
        setOpenAddCalendar(true);
        setFormOptionBtn(false);
    };
    const handleSelectDay = () => {
        setChooseDay(!chooseDay);
    }

    const handleCheckLocationPopup = (e: React.MouseEvent) => {
        e.stopPropagation();
      };

    return (
        <>
        {formOptionBtn && <div className={clsx(style.optionActive)}>
            <button className={clsx(style.btnCloseFirt)} onClick={onClose}>close</button>
            <div className={clsx(style.listBtn)}>
                <button
                    onClick={handleOpenAddCalendar}
                    className={clsx(style.btnOpenAddCalendar)}>
                        TẠO LỊCH MỚI
                </button>
                <button 
                    className={clsx(style.btnOpenEditCalendar)}>
                        CHỈNH SỬA LỊCH
                </button>
            </div>
        </div>}
        {openAddCalendar && <div onClick={handleSelectDay} className={clsx(style.addCalendar)}>
            <div className={clsx(style.headForm)}>
                <div className={clsx(style.optionActiveFormAdd)}>
                    <button onClick={handleBackFormFirt} className={clsx(style.btnBack)}>back</button>
                    <button onClick={onClose} className={clsx(style.btnClose)}>close</button>
                </div>
                <div className={clsx(style.titleForm)}>Thêm lịch học</div>
            </div>

            <div className={clsx(style.bodyForm)}>
                <form className={clsx(style.containerForm)} method="POST" id="formAddCalendar">
                    <div className={clsx(style.itemContainer)}>
                        <label htmlFor="name_subject">Tên môn học :</label>
                        <input id="name_subject" type="text" name="nameSubject"/>
                    </div>
                    <div className={clsx(style.itemContainer)}>
                        <label>Thời gian học :</label>
                        <div onClick={handleSelectDay} className={clsx(style.selectDay)}>
                            Chọn thứ 
                            <svg width="20px" height="20px" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3.25 6C4.76878 6 6 4.76878 6 3.25S4.76878 0.5 3.25 0.5 0.5 1.73122 0.5 3.25 1.73122 6 3.25 6Z"/>
                                <path d="M10.75 6c1.5188 0 2.75 -1.23122 2.75 -2.75S12.2688 0.5 10.75 0.5C9.23122 0.5 8 1.73122 8 3.25S9.23122 6 10.75 6Z"/>
                                <path d="M3.25 13.5C4.76878 13.5 6 12.2688 6 10.75 6 9.23122 4.76878 8 3.25 8S0.5 9.23122 0.5 10.75c0 1.5188 1.23122 2.75 2.75 2.75Z"/>
                                <path d="m10.75 13.5c1.5188 0 2.75-1.2312 2.75-2.75 0-1.5188-1.2312-2.75-2.75-2.75-1.5188 0-2.75 1.2312-2.75 2.75 0 1.5188 1.2312 2.75 2.75 2.75z"/>
                                </g>
                            </svg>
                        </div>
                        {chooseDay &&
                            <div onClick={handleCheckLocationPopup} className={clsx(style.listDays)}>
                                {dayOfWeek.map((data,index) => (
                                    <div className={clsx(style.itemDay)} key={index}>
                                        <input type="checkbox" name="days" id={data} value={data}/>
                                        <label htmlFor={data}>
                                            {data === "monday" && "Thứ 2"}
                                            {data === "tuesday" && "Thứ 3"}
                                            {data === "wednesday" && "Thứ 4"}
                                            {data === "thursday" && "Thứ 5"}
                                            {data === "friday" && "Thứ 6"}
                                            {data === "saturday" && "Thứ 7"}
                                            {data === "sunday" && "Chủ nhật"}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>

                </form>
                <div className={clsx(style.chooseActive)}>
                    <button className={clsx(style.btnReset)} type="reset">Hủy</button>
                    <button className={clsx(style.btnForm)} form="formAddCalendar" type="submit" value="Tạo lịch">Tạo lịch</button>
                </div>
            </div>
        </div>}
        </>
    )
}

export default AddCalendarForm;