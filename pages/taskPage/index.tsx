"use client"
import clsx from "clsx";
import style from "./task.module.css";
import { useEffect, useState } from "react";
import Calendar from "@/layouts/calendar/calendar";
import AddTaskForm from "@/components/formAddTask";

export default function TaskPage() {

    const [openForm, setOpenForm] = useState(false);
    const handleOpenForm =  () => {
        setOpenForm(true);
    }
    const handleCloseForm = () => {
        setOpenForm(false);
    }

    let fakeData = [
        {
            id : 1, 
            title : "Cấu trúc dữ liệu và giải thuật - Lập trình Java căn bản Cấu trúc dữ liệu",
            time_start : "12:30",
            time_end : "14:55",
            status : true,
        },
        {
            id : 2, 
            title : "Toán rời rạc",
            time_start : "18:00",
            time_end : "21:15",
            status : false,
        }, 
        {
            id : 3, 
            title : "Toán rời rạc",
            time_start : "18:00",
            time_end : "21:15",
            status : false,
        },
        {
            id : 4, 
            title : "Toán rời rạc",
            time_start : "18:00",
            time_end : "21:15",
            status : true,
        },
        {
            id : 5, 
            title : "Toán rời rạc",
            time_start : "18:00",
            time_end : "21:15",
            status : false,
        },
    ];

    const [limitData, setLimitData] = useState(2);
    const [startData, setStartData] = useState(0);
    const handleSeeMore = () => {
        setStartData(limitData);
        setLimitData(pre => pre + 2);
        if (limitData > fakeData.length) {
            setLimitData(2);
            setStartData(0);
        }
    }
    const handleCheckTask = (targetId: number, checkStatus : boolean) => {
        const updateData = fakeData.map(item => {
            if (item.id === targetId) {
                return {
                    ...item,
                    status : !item.status,
                }
            }
            return item;
        });
        fakeData = updateData;
    };

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return (
        <div className={clsx(style.schedulePage)}>
            <div className={clsx(style.calendarContainer)}>
                <div className={clsx(style.dataCalendar)}>
                    <Calendar year={year} month={month} />
                </div>
                <div className={clsx(style.task)}>
                    <div className={clsx(style.titleTask)}>Nhiệm vụ của bạn</div>
                    <div className={clsx(style.containerTask)}>
                        <div className={clsx(style.listItem)}>
                            {fakeData.slice(startData, limitData).map((data, index) => { 
                                const targetId = data.id;
                                const checkStatus = data.status;
                                return (
                                <div 
                                    key={index}
                                    className={clsx(style.item)}
                                >
                                    <div className={clsx(style.itemTime)}>
                                        <div className={clsx(style.timeStart)}>{data.time_start}</div>
                                        <div className={clsx(style.lineTime)}></div>
                                        <div className={clsx(style.timeEnd)}>{data.time_end}</div>
                                    </div>
                                    <div className={clsx(style.containerItem)}>
                                        <div className={clsx(style.titleItem)}>
                                            {data.title.length <= 70 ? data.title : data.title.slice(0, 70) + " ..."}
                                        </div>
                                        <div className={clsx(style.statusItem)}>
                                            Trạng thái hoàn thành : 
                                            <span 
                                                onClick={() => handleCheckTask(targetId, checkStatus)}
                                                className={clsx(checkStatus ? style.done : style.continue)}>
                                                    {checkStatus ? " Xong" : " Chưa"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>

                        <div className={clsx(style.btnSeeMore)} onClick={handleSeeMore}>
                            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-1" x2="16.4012" y2="-1" transform="matrix(0.609711 0.792624 -0.385383 0.922757 18 23)" stroke="white" strokeWidth="2"/>
                            <line y1="-1" x2="16.4012" y2="-1" transform="matrix(-0.609711 0.792624 0.385383 0.922757 38 23)" stroke="white" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleOpenForm} className={clsx(style.editTask)}>
                <svg fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6.9257 13.202-3 0.26 0.26-3 6.24-6.2c0.0932-0.09524 0.2044-0.17092 0.3272-0.22259 0.1227-0.05167 0.2546-0.07828 0.3878-0.07828s0.2651 0.02661 0.3879 0.07828 0.234 0.12735 0.3271 0.22259l1.27 1.28c0.0937 0.09297 0.1681 0.20357 0.2189 0.32543s0.0769 0.25256 0.0769 0.38457-0.0261 0.26272-0.0769 0.38458-0.1252 0.23246-0.2189 0.32542l-6.2 6.24z"/>
                    <path d="m0.84169 3.972c-0.35093-0.06106-0.35093-0.56483-1e-6 -0.62588 1.2714-0.22119 2.2825-1.1896 2.5585-2.4502l0.02115-0.096629c0.07592-0.34683 0.56977-0.34899 0.64872-0.002836l0.02568 0.11261c0.28617 1.2547 1.2976 2.2148 2.5655 2.4354 0.35272 0.06136 0.35272 0.56771 0 0.62907-1.2678 0.22057-2.2793 1.1808-2.5655 2.4354l-0.02568 0.11261c-0.07895 0.34616-0.5728 0.344-0.64872-0.00284l-0.02115-0.09662c-0.27596-1.2606-1.2871-2.229-2.5585-2.4502z"/>
                    </g>
                </svg>
                <div>Tạo / Chỉnh sửa nhiệm vụ</div>
            </button>
            {openForm && <div className={clsx(style.formAddTask)}>
            <AddTaskForm onClose={handleCloseForm} />
            </div> }
        </div>
    )
}