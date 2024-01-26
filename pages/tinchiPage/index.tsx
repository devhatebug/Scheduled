"use client"
import clsx from "clsx";
import style from "./tinChi.module.css";
import URL_DATA from "@/data/tinchi.json";   
import ChooseTinChiForm from "@/components/formChooseTinChi";
import { useState } from "react";

export default function TinChi() {
    const API = URL_DATA;
    const subjectCt4 = [
        "Chuyên đề tổng hợp về phát triển phần mềm-2-23 (C0401)",
        'Đồ án tốt nghiệp-2-23',
        "Kiến thức cơ sở trong phát triển phần mềm-2-23",
        "Thực tập tốt nghiệp-2-23"
    ];
    const subjectAt17ct5dt4 = [
        {id : 1, "targetSubject" : "An toàn hệ thống nhúng-2-23"},
        {id : 2, "targetSubject" : "An toàn thương mại điện tử-2-23"},
        {id : 3, "targetSubject" : "Cấu trúc dữ liệu và giải thuật nâng cao-2-23"},
        {id : 4, "targetSubject" : "Chứng thực điện tử-2-23"},
        {id : 5, "targetSubject" : "Cơ sở an toàn và bảo mật thông tin-2-23"},
        {id : 6, "targetSubject" : "Công nghệ blockchain-2-23"},
        {id : 7, "targetSubject" : "Công nghệ IoT và an toàn-2-23"},
        {id : 8, "targetSubject" : "Điều tra số-2-23"},
        {id : 9, "targetSUbject" : "Đồ án 3-2-23"},
        {id : 10, "targetSubject" : "Giám sát và ứng phó sự cố an toàn mạng-2-23"},
        {id : 11, "targetSubject" : "Hệ điều hành nhúng thời gian thực-2-23"},
        {id : 12, "targetSubject" : "Khai phá dữ liệu trong an toàn thông tin-2-23"},
        {id : 13, "targetSubject" : "Kiểm thử phần mềm nhúng-2-23"},
        {id : 14, "targetSubject" : "Kiểm thử và đảm bảo chất lượng phần mềm-2-23"},
        {id : 15, "targetSubject" : "Kiểm thử và đánh giá an toàn hệ thống thông tin-2-23"},
        {id : 16, "targetSubject" : "Kỹ thuật giấu tin-2-23"},
        {id : 17, "targetSubject" : "Kỹ thuật lập trình an toàn-2-23"},
        {id : 18, "targetSubject" : "Lập trình Android cơ bản (có thể thay thế)-2-23"},
        {id : 19, "targetSubject" : "Lập trình driver-2-23"},
        {id : 20, "targetSubject" : "Lập trình nhân Linux-2-23"},
        {id : 21, "targetSubject" : "Mật mã ứng dụng trong an toàn thông tin-2-23"},
        {id : 22, "targetSubject" : "Phát triển ứng dụng IoT-2-23"},
        {id : 23, "targetSubject" : "Quản lý an toàn thông tin-2-23"},
        {id : 24, "targetSubject" : "Thiết kế PLC-2-23"},
        {id : 25, "targetSubject" : "Thiết kế vi mạch số-2-23 (DT4-01)"},
        {id : 26, "targetSubject" : "Thực tập cơ sở 3-2-23"},
    ];
    const subjectAt18ct6dt5 = [
        {id : 1, "targetSubject" : "An toàn cơ sở dữ liệu-2-23"},
        {id : 2, "targetSubject" : "Chương trình dịch-2-23"},
        {id : 3, "targetSubject" : "Chuyên đề cơ sở-2-23"},
        {id : 4, "targetSubject" : "Cơ sở an toàn thông tin-2-23"},
        {id : 5, "targetSubject" : "Đồ án 1-2-23"},
        {id : 6, "targetSubject" : "Giao thức an toàn mạng-2-23"},
        {id : 7, "targetSubject" : "Hệ thống viễn thông-2-23"},
        {id : 8, "targetSubject" : "Kiến trúc máy tính và hợp ngữ-2-23"},
        {id : 9, "targetSubject" : "Kiến trúc máy tính-2-23"},
        {id : 10, "targetSubject" : "Kỹ thuật cảm biến-2-23"},
        {id : 11, "targetSubject" : "Kỹ thuật lập trình-2-23"},
        {id : 12, "targetSubject" : "Kỹ thuật vi xử lý-2-23"},
        {id : 13, "targetSubject" : "Phân tích, thiết kế hệ thống thông tin-2-23"},
        {id : 14, "targetSubject" : "Phát triển ứng dụng web-2-23"},
        {id : 15, "targetSubject" : "Thiết kế hệ thống số-2-23"},
        {id : 16, "targetSubject" : "Thực tập cơ sở 1-2-23"},
        {id : 17, "targetSubject" : "Tiếng Anh chuyên ngành"},
        {id : 18, "targetSubject" : "Tiếng Anh chuyên ngành"},
        {id : 19, "targetSubject" : "Tiếng Anh chuyên ngành-2-23"},
        {id : 20, "targetSubject" : "Xử lý tín hiệu số-2-23"},
    ];
    const subjectAt19Ct7Dt6 = [
        {id : 1, "targetSubject" : "Cơ sở lý thuyết truyền tin-2-23"},
        {id : 2, "targetSubject" : "Điện tử số-2-23"},
        {id : 3, "targetSubject" : "Điện tử tương tự và điện tử số-2-23"},
        {id : 2, "targetSubject" : "Điện tử tương tự-2-23"},
        {id : 2, "targetSubject" : "Giáo dục thể chất 4-2-23- bóng bàn"},
        {id : 2, "targetSubject" : "Giáo dục thể chất 4-2-23- bóng đá"},
        {id : 2, "targetSubject" : "Giáo dục thể chất 4-2-23- cầu lông"},
        {id : 2, "targetSubject" : "Giáo dục thể chất 4-2-23 cờ vua"},
        {id : 2, "targetSubject" : "Lịch sử Đảng cộng sản Việt Nam-2-23"},
        {id : 2, "targetSubject" : "Linh kiện điện tử-2-23"},
        {id : 2, "targetSubject" : "Lý thuyết cơ sở dữ liệu-2-23"},
        {id : 2, "targetSubject" : "Lý thuyết mạch-2-23"},
        {id : 2, "targetSubject" : "Otomat và ngôn ngữ hình thức-2-23"},
        {id : 2, "targetSubject" : "Quản trị mạng máy tính-2-23"},
        {id : 2, "targetSubject" : "Thuật toán trong an toàn thông tin-2-23"},
        {id : 2, "targetSubject" : "Tiếng Anh 2-2-23"},
        {id : 2, "targetSubject" : "Toán chuyên đề-2-23"},
        {id : 2, "targetSubject" : "Toán rời rạc-2-23"},
    ];
    for (let i = 0; i<=subjectCt4.length; i++) {
        const filteredSubjects = API.data.filter(subject => subject[0] === subjectCt4[i]);
        filteredSubjects.forEach(subject => {
            console.log("Tên môn học:", subject[0]);
            console.log("Số tín chỉ:", subject[1]);
            console.log("Ngày bắt đầu:", subject[2]);
            console.log("Ngày kết thúc:", subject[3]);
            console.log("Lịch học:", subject[4]);
            console.log("--------------");
        });
    }
    
    console.log(subjectCt4[0]);
    const [showForm, setShowForm] = useState(false);
    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    return (
        <>
        <div className={clsx(style.tinchiPage)}>
            <button onClick={handleShowForm} className={clsx(style.btnChooseClass)}>CHỌN LỚP</button>
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
                                Silver
                            </td>
                            <td className="cursor-help px-5 py-5">
                                Laptop
                            </td>
                            <td className="cursor-help px-5 py-5">
                                $2999
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className={clsx(style.formChooseTinChi)}>
            <ChooseTinChiForm />
        </div>
        </>
    )
}       

7