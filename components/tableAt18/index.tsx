import React, { useEffect, useState } from "react";
import clsx from "clsx";
import style from "./tableAt18.module.css";

const TableAt18 = () => {
    return (
        <div className={clsx(style.tableClass, "relative overflow-x-auto shadow-md sm:rounded-lg")}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="w-[80px] px-3 py-3">
                            Đăng kí
                        </th>
                        <th scope="col" className="px-6 py-3 pr-0">
                            Tên môn
                        </th>
                        <th scope="col" className="w-[10rem] px-6 py-3">
                            Lớp
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input className={clsx(style.inputClass)} id="checkbox-table-1" type="checkbox" />
                                <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-extrabold text-gray-900 whitespace-nowrap dark:text-white">
                            An toàn cơ sở dữ liệu-2-23
                        </th>
                        <td className="px-6 py-4">
                            <select className={clsx(style.selectClass)}>
                                <option value="Chon lop">Chọn lớp</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default TableAt18;