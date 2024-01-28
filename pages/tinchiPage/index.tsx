"use client"
import clsx from "clsx";
import style from "./tinChi.module.css";
import URL_DATA from "@/data/tinchi.json";   
import ChooseTinChiForm from "@/components/formChooseTinChi";
import { useEffect, useState } from "react";

export default function TinChi() {
    const API = URL_DATA;
    const [showForm, setShowForm] = useState(false);
    const handleOpenForm = () => {
        setShowForm(true);
    }
    const handleCloseForm = () => { 
        setShowForm(false);
    }
    return (
        <>
        <div className={clsx(style.tinchiPage)}>
            <button onClick={handleOpenForm} className={clsx(style.btnChooseClass)}>CHỌN LỚP</button>
            <div className={clsx(style.tableDisplay, "relative overflow-x-auto shadow-md sm:rounded-lg")}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Học kỳ: Học kỳ 2 năm học 2023 - 2024
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">   
                        <strong>Lưu ý:</strong>
                        <br />
                        Trang web chỉ hỗ trợ xếp lịch, không hỗ trợ đăng ký môn học trên web của trường.
                        Các môn có tiết thực hành (có đuôi chấm theo sau) đã được thêm tiết lý thuyết vào.
                        <br />
                        <br />
                        <strong>Hướng dẫn:</strong>
                        <br />
                        Check vào nút đăng ký các môn muốn học, sau đó chọn lớp cho từng môn, tiết nào bị trùng thì sẽ chuyển sang màu đỏ, bấm vào ô trong lịch để xem những môn của tiết đấy.
                        Xem chi tiết thông tin của từng lớp trong file excel của trường, tải ở đây.
                        Chúc các bạn đăng ký đúng lớp đã chọn ❤
                        </p>
                    </caption>
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            <div className="grid grid-cols-2 grid-rows-2">
                                <span />
                                <span>Tiết</span>
                                <span>Thứ</span>
                                <span />
                            </div>
                            </th>
                            {Array.from({ length: 16 }, (_, index) => (
                                 <th key={index} scope="col" className="px-5 py-5">{index + 1}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="cursor-help px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="cursor-help px-5 py-5">
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {showForm && (
            <div className={clsx(style.formChooseTinChi)}>
                <ChooseTinChiForm closeForm={handleCloseForm} />
            </div>
        )}
        </>
    )
}       

7