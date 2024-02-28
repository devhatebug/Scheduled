'use client'
import React, {useState, useEffect} from "react";
import style from "./filter.module.css";
import clsx from "clsx";

const Filter = ({dataFilter = ["2", "b", "c", "d"]}) => {
    const [filter_checked, setFilterChecked] = useState<string[]>([]);
    const [isData, setIsData] = useState(false);
    const [checkedState, setCheckedState] = useState<boolean[]>(Array(dataFilter.length).fill(false));
    const handleShowFilter = () => {
        setIsData(!isData);
    }
    const changeValueFilter = (e: any, id:any) => {
        const isChecked = e.target.checked;
        setCheckedState(prevState => {
            const newState = [...prevState];
            newState[id] = isChecked;
            return newState;
        });
        const label = e.target.nextElementSibling;
        const textLabel = label.innerText;

        if (isChecked) {
            setFilterChecked([...filter_checked, textLabel]);
        } else {
            const updatedFilterChecked = filter_checked.filter(item => item !== textLabel);
            setFilterChecked(updatedFilterChecked);
        }
    }
    return (
        <>
        <div className={clsx(style.filterForm)}>
            <div onClick={handleShowFilter} className={clsx(style.titleFilter)}>
                <div className={clsx(style.iconFilter)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20" id="Filter-2--Streamline-Sharp">
                        <g id="Filter-2--Streamline-Sharp">
                            <path id="Union" stroke="#ffffff" d="M14.5 13.5 22 6V2H2v4l7.5 7.5v8l5 -3v-5Z" strokeWidth="1.5"></path>
                        </g>
                    </svg>
                </div>
                <div>Filters</div>
            </div>
            <div className={clsx(style.listFilter)}>
                {filter_checked.map((dt: any,id: any) => (
                    <div key={id} className={clsx(style.itemFilter)}>
                        {dt}
                    </div>
                ))}
            </div>
            <button className={clsx(style.clearFilter)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24" id="Delete-2--Streamline-Sharp">
                    <g id="Delete-2--Streamline-Sharp">
                        <path id="Union" stroke="#ffffff" d="M7 2 2 7l5 5 -5 5 5 5 5 -5 5 5 5 -5 -5 -5 5 -5 -5 -5 -5 5 -5 -5Z" strokeWidth="1"></path>
                    </g>
                </svg>
            </button>
        </div>
        {isData && <div className={clsx(style.listDataFilter)}>
            {dataFilter.map((dt, id) => (
                <div key={id} className={clsx(style.itemDataFilter)}>
                    <input 
                        onChange={e => changeValueFilter(e, id)} 
                        type="checkbox" 
                        name={id.toString()} 
                        id={id.toString()} 
                        checked={checkedState[id]}
                    />
                    <label htmlFor={id.toString()} className="nameItem">{dt}</label>
                </div>
            ))}
        </div>}
        </>
    )
}

export default Filter;