"use client";
import React, {useState, useEffect} from "react";
import clsx from "clsx";
import style from "./formAddCalendar.module.css";
import Filter from "@/layouts/filter/filter";

interface activeClose {
    onClose : () => void;
}

const AddCalendarForm : React.FC<activeClose> = ({onClose}) => {

    // data filter
    
    const [formOptionBtn, setFormOptionBtn] = useState(true);
    const [openAddCalendar, setOpenAddCalendar] = useState(false);
    const [openEditCalendar, setOpenEditCalendar] = useState(false);
    const [chooseDay, setChooseDay] = useState(false);

    const handleBackFormFirt = () => {
        setOpenAddCalendar(false);
        setFormOptionBtn(true);
        setOpenEditCalendar(false)
    }
    const handleOpenAddCalendar = () => {
        setOpenAddCalendar(true);
        setFormOptionBtn(false);
    };
    const handleOpenEditCalendar = () => {
        setOpenEditCalendar(true);
        setFormOptionBtn(false);
    }
    const handleSelectDay = () => {
        setChooseDay(!chooseDay);
    }

    // function check value input time start
    const [warningHourStart, setWarningHourStart] = useState(false);
    const [showWarningHourStart, setShowWarningHourStart] = useState<string | null>("");
    const [warningMinuteStart, setWarningMinuteStart] = useState(false);
    const [showWarningMinuteStart, setShowWarningMinuteStart]= useState<string | null>("");
    const [isTimeStart, setIsTimeStart] = useState(false);
    const [showNoValueStart, setShowNoValueStart] = useState(false);
    const handleCheckHourStart = (event :any) => {
        const value = event.target.value;
        if (value < 0 || value > 24) {
            setWarningHourStart(true);
            setShowWarningHourStart("Giờ chỉ nằm trong khoảng 00 -> 24");
        } else {
            setWarningHourStart(false);
        };
        value === "" && setIsTimeStart(false);
        value !== "" && setIsTimeStart(true);
    };
    const handleCheckMinuteStart = (e:any) => {
        const value = e.target.value;
        if (value < 0 || value >= 60) {
            setWarningMinuteStart(true);
            setShowWarningMinuteStart("Phút chỉ nằm trong khoảng 0->59")
        } else {
            setWarningMinuteStart(false);
        }
    }

    // function check time input end 
    const [warningHourEnd, setWarningHourEnd] = useState(false);
    const [warningMinuteEnd, setWarningMinuteEnd] = useState(false);
    const [showWarningHourEnd, setShowWarningHourEnd] = useState<string | null>("");
    const [showwWarningMinuteEnd, setShowWarningMinuteEnd] = useState<string | null>("");
    const [isTimeEnd, setIsTimeEnd] = useState(false);
    const [showNoValueTimeEnd, setShowNoValueTimeEnd] = useState(false)
    const handleCheckHourEnd = (e: any) => {
        const value = e.target.value;
        if(value < 0 || value > 24) {
            setWarningHourEnd(true);
            setShowWarningHourEnd("Giờ chỉ nằm trong khoảng 00 -> 24");
        } else {
            setWarningHourEnd(false);
        }
        value === "" && setIsTimeEnd(false);
        value !== "" && setIsTimeEnd(true);
    }

    const handleCheckMinuteEnd = (e :any) => {
        const value = e.target.value;
        if(value < 0 || value >= 60) {
            setWarningMinuteEnd(true);
            setShowWarningMinuteEnd("Phút chỉ nằm trong khoảng 0->59");
        } else {
            setWarningMinuteEnd(false);
        };
    }

    // handle check data form submit
    const warning = "Vui lòng không để trống mục này";
    const [showWarning, setShowWarning] = useState<boolean>();
    const [checkSubmit, setCheckSubmit] = useState<boolean>(false);
    const [dataName, setDataName] = useState<boolean>();
    const followValueName = (e:any) => {
        const value = e.target.value;
        if (value != null || value != "") {
            setDataName(true);
            setCheckSubmit(true);
            setShowWarning(false);
        };
        if (value === null || value === "") {
            setDataName(false);
            setCheckSubmit(false);
        };
    };

    const handleCheckData = () => {
        dataName ? setShowWarning(false) : setShowWarning(true);
        isTimeEnd ? setShowNoValueTimeEnd(false) : setShowNoValueTimeEnd(true);
        isTimeStart ? setShowNoValueStart(false) : setShowNoValueStart(true);
    }

    const handleSubmitForm = () => {
        if (checkSubmit) {
            onClose();
        } else {
            handleCheckData();
        }
    }

    const handleResetForm = () => {
        onClose();
    }
 
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
                    onClick={handleOpenEditCalendar}
                    className={clsx(style.btnOpenEditCalendar)}>
                        CHỈNH SỬA LỊCH
                </button>
            </div>
        </div>}
        {openAddCalendar && 
        <div className={clsx(style.addCalendar)}>
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
                        <label htmlFor="name_subject">
                            Tên môn học :
                            {showWarning && 
                                <div className={clsx(style.warningToast)}>
                                    {warning}
                                </div>
                            }
                        </label>
                        <input onChange={followValueName} id="name_subject" type="text" name="nameSubject"/>
                    </div>
                    <div className={clsx(style.itemContainer)}>
                        <label>Thời gian học :</label>
                        <select className={clsx(style.selectDay)}>
                            <option value="default">Chọn ngày</option>
                            <option value="monday">Thứ 2</option>
                            <option value="tuesday">Thứ 3</option>
                            <option value="wednesday">Thứ 4</option>
                            <option value="thursday">Thứ 5</option>
                            <option value="friday">Thứ 6</option>
                            <option value="satuday">Thứ 7</option>
                            <option value="sunday">Chủ nhật</option>
                        </select>
                    </div>

                    <div className={clsx(style.itemContainer)}>
                        <label htmlFor="hour_start">
                            Bắt đầu vào :
                            {warningHourStart && 
                                <div className={clsx(style.warningToast)}>
                                    {showWarningHourStart}
                                </div>
                            }
                            {warningMinuteStart && 
                                <div className={clsx(style.warningToast)}>
                                    {showWarningMinuteStart}
                                </div>
                            }
                        </label>
                        
                        <div className={clsx(style.inputChooseTime)}>
                            <input 
                                onChange={handleCheckHourStart}
                                step="1"
                                max="24"
                                min="1" 
                                id="hour_start" 
                                name="hour" 
                                type="number" 
                            />
                            <span>:</span>
                            <input 
                                onChange={handleCheckMinuteStart}
                                name="minute" 
                                step="1"
                                max="59"
                                min="0"
                                type="number" 
                            />
                            <select name="choose_type">
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>

                    <div className={clsx(style.itemContainer)}>
                        <label htmlFor="hour_end">
                            Kết thúc vào :
                            {warningHourEnd && 
                                <div className={clsx(style.warningToast)}>
                                    {showWarningHourEnd}
                                </div>
                            }
                            {warningMinuteEnd && 
                                <div className={clsx(style.warningToast)}>
                                    {showwWarningMinuteEnd}
                                </div>
                            }
                        </label>
                        <div className={clsx(style.inputChooseTime)}>
                            <input 
                                onChange={handleCheckHourEnd}
                                step="1"
                                max="24"
                                min="1" 
                                id="hour_end" 
                                name="hour" 
                                type="number" 
                            />
                            <span>:</span>
                            <input 
                                onChange={handleCheckMinuteEnd}
                                name="minute" 
                                step="1"
                                max="59"
                                min="0"
                                type="number" 
                            />
                            <select name="choose_type">
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>

                    <div className={clsx(style.itemContainer)}>
                        <label htmlFor="location_study">Địa điểm học :</label>
                        <input id="location_study" type="text" />
                    </div>
                </form>
                <div className={clsx(style.chooseActive)}>
                    <button 
                        onClick={handleResetForm}
                        className={clsx(style.btnReset)} 
                        type="reset" 
                        value="Huy">
                            Hủy
                    </button>
                    <button 
                        onClick={handleSubmitForm}
                        className={clsx(style.btnCreate)} 
                        value="Tạo lịch">
                            Tạo lịch
                    </button>
                </div>
            </div>
        </div>}
        {openEditCalendar && (
            <div className={clsx(style.editCalendar)}>
                <div className={clsx(style.headForm)}>
                    <div className={clsx(style.optionActiveFormAdd)}>
                        <button onClick={handleBackFormFirt} className={clsx(style.btnBack)}>back</button>
                        <button onClick={onClose} className={clsx(style.btnClose)}>close</button>
                    </div>
                    <div className={clsx(style.titleForm)}>Sửa lịch học</div>
                </div>
                <div className={clsx(style.bodyForm)}>
                    {/* <div className={clsx(style.searchForm)}>
                        <div className={clsx(style.iconSearch)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="23" width="23" id="Magnifying-Glass--Streamline-Sharp">
                                <g id="Magnifying-Glass--Streamline-Sharp">
                                    <path id="Ellipse 44" stroke="#ffffff" d="M2 11a9 9 0 1 0 18 0 9 9 0 1 0 -18 0" strokeWidth="1.5"></path>
                                    <path id="Vector 195" stroke="#ffffff" d="M17.364 17.364 22 22" strokeWidth="1.5"></path>
                                </g>
                            </svg>
                        </div>
                        <div className={clsx(style.inputSearch)}>
                            <input type="text"  placeholder="Search ..." name="" id="" />
                        </div>
                    </div> */}
                    
                </div>
            </div>
        )}
        </>
    )
}

export default AddCalendarForm;