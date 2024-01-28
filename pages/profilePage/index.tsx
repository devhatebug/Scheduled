"use client"
import clsx from "clsx";
import style from "./profile.module.css";
import React, { useEffect, useState } from "react";

const fakeUser = [{
    "name" : "to khac giap",
    "image" : "https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg",
    "student_code" : "CT070123",
    "birthday" : "01/01/2004",
    "location" : "Hà Nội",
    "education" : "Học viện kỹ thuật mật mã",
    "username" : "togiap.dev",
    "password" : "Togiap.dev@28112004",
    "task" : "5",
    "event" : "2"
}];

// function caculate point complete
const caculatePointComplete = (user: any) => {
    let score = 6;
    const requiredFields = ["name", "image", "student_code", "location", "education", "birthday"];
    for (const field of requiredFields) {
      if (!user[0][field]) {
        score -= 1;
      }
    }
    return score;
};

export default function ProfilePage() {
    const [checkAvt, setCheckAvt] = useState(false);

    // set link avt
    const [linkAvt, setLinkAvt] = useState("");
    const handleCheckAvt = () => {  
        setCheckAvt(!checkAvt);
    };
    const arrName = fakeUser[0].name.split("");
    const newArrName = arrName.map((data) => data.toUpperCase());
    const defaultAvt = newArrName[0].toString();  
    useEffect(() => {
        checkAvt ? setLinkAvt(fakeUser[0].image) : setLinkAvt(defaultAvt);
    },[checkAvt]);

    // set hidden password
    const [hiddenPass, setHisddenPass] = useState(true);
    const [printPass, setPrintPass] = useState("•");
    const handleShowPass = () => {
        setHisddenPass(!hiddenPass);
    };
    useEffect(() => {
        const lenghtPass = fakeUser[0].password.length;
        let newPass = "•";
        newPass = newPass.repeat(lenghtPass/2); 
        hiddenPass ? setPrintPass(newPass) : setPrintPass(fakeUser[0].password);
    },[hiddenPass]);

    // caculate point complete profile user 
    const pointComplete = caculatePointComplete(fakeUser);
    const score = pointComplete/6 * 100;

    return (    
        <div className={clsx(style.profilePage)}>
            <div className={clsx(style.user)}>
                <div onClick={handleCheckAvt} className={clsx(style.userImage)}>
                    {checkAvt ?
                    <img 
                        className={clsx(style.avtUser)}
                        src={linkAvt} alt="" /> :
                    <button className={clsx(style.avtDefault)}>{linkAvt}</button>
                    }
                </div>

                <div className={clsx(style.userName)}>
                    {fakeUser.map((data) => data.name).join().toUpperCase()}
                    <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.637 1.198a1 1 0 0 1 0.134 1.408l-8.04 9.73-3e-3 2e-3a1.924 
                        1.924 0 0 1-1.5 0.693 1.924 1.924 0 0 1-1.5-0.75l-2.518-3.236a1 1 0 1 
                        1.578-1.228l2.464 3.167 7.976-9.652a1 1 0 0 1 1.408-0.134z" 
                        clipRule="evenodd" fillRule="evenodd"/>
                    </svg>
                </div>

                <div className={clsx(style.msvUser)}>
                    {"MSV : " +  fakeUser.map(data => data.student_code).join()}
                </div>
            </div>

            <div className={clsx(style.info)}>
                <div className={clsx(style.infoBasic)}>
                    <div className={clsx(style.titleCategory)}>Thông tin cơ bản</div>
                    {fakeUser.map((data, index) => (
                        <ul key={index} className={clsx(style.listInfo)}>
                            <li className={clsx(style.itemInfo)}>
                                {"Ngày sinh : " + data.birthday}
                            </li>
                            <li className={clsx(style.itemInfo)}>
                                {"Địa điểm : " + data.location}
                            </li>
                            <li className={clsx(style.itemInfo)}>
                                {"Học vấn : " + data.education}
                            </li>
                            <li className={clsx(style.itemInfo)}>
                                {"Số nhiệmm vụ cần làm : " + data.task}
                            </li>
                            <li className={clsx(style.itemInfo)}>
                                {"Sự kiện sắp tới : " + data.event}
                            </li>
                        </ul>
                    ))}
                </div>

                <div className={clsx(style.infoSecurity)}>
                    <div className={clsx(style.titleCategory)}>Thông tin bảo mật</div>
                    {fakeUser.map((data, index) => (
                        <ul key={index} className={clsx(style.listInfo)}>
                            <li className={clsx(style.itemInfo)}>
                                {"Tên đăng nhập : " + data.username}
                            </li>
                            <li className={clsx(style.itemInfo)}>
                                {"Mật khẩu : " + printPass}
                                <button onClick={handleShowPass} className={clsx(style.showPass)}>
                                    {hiddenPass ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 24 24">
                                            <path stroke="#ffffff" d="M17.416 17.416a8.13 8.13 0 0 0 
                                            0.478 -0.47L20.5 14c1 -1 2.224 -2 3.5 -2 -1.276 0 -2.5 -1 
                                            -3.5 -2l-2.606 -2.947a8.079 8.079 0 0 0 -11.31 -0.469m8.713 
                                            12.213a8.077 8.077 0 0 1 -9.19 -1.85L3.5 14c-1 -1 -2.224 -2 
                                            -3.5 -2 1.276 0 2.5 -1 3.5 -2l1.408 -1.592M0.5 0.5l23 23m-9.732 
                                            -9.732a2.5 2.5 0 0 0 -3.536 -3.536"></path>
                                        </svg>                                        
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 24 24">
                                            <path stroke="#ffffff" d="M6.106 7.053a8.079 8.079 0 0 1 11.788 
                                            0L20.5 10c1 1 2.224 2 3.5 2 -1.276 0 -2.5 1 -3.5 2l-2.606 
                                            2.947a8.079 8.079 0 0 1 -11.788 0L3.5 14c-1 -1 -2.224 -2 -3.5 
                                            -2 1.276 0 2.5 -1 3.5 -2l2.606 -2.947Z"></path>
                                            <path stroke="#ffffff" d="M9.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1 
                                            -5 0Z" strokeWidth="2"></path>
                                        </svg>
                                    )}
                                </button>
                            </li>
                            <li className={clsx(style.itemInfo)}>
                                Thông tin người dùng : {score%10 !== 0 ? score.toFixed(2) : score}/100
                            </li>
                            <li className={clsx(style.itemInfo)}>
                                <button>Đổi mật khẩu</button>
                            </li>
                            <li className={clsx(style.itemInfo)}>
                                <button>Đăng xuất</button>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            <button className={clsx(style.btnEditInfo)}>
                <svg fill="#ffffff" width="27px" height="20px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.41 3.5964c-0.0193-0.10479-0.0604-0.20435-0.1207-0.29222-0.0603-0.08786-0.1384-0.16206-0.2293-0.21778l-2 
                    2c-0.0933 0.09678-0.2051 0.17377-0.3288 0.22635s-0.2568 0.07968-0.3912 
                    0.07968-0.2674-0.0271-0.39114-0.07968c-0.12371-0.05258-0.23555-0.12957-0.32883-0.22635l-0.76-0.68c-0.18323-0.18693-0.28586-0.43825-0.28586-0.7s0.10263-0.51307 
                    0.28586-0.7l2-2c-0.0436-0.10246-0.1092-0.19409-0.1921-0.26839-0.083-0.074305-0.1812-0.12948-0.2879-0.1616-0.6978-0.13916-1.4207-0.079592-2.0863 0.17192s-1.2473 
                    0.68487-1.6787 1.2507-0.69531 1.2415-0.7616 1.95c-0.0621 0.66366 0.05153 1.3312 0.32834 1.9358l-5.3667 5.3667c-0.39617 0.3962-0.3896 1.0405 0.014567 1.4285l0.56078 
                    0.5384c0.39114 0.3755 1.0103 0.3709 1.3958-0.0105l5.4283-5.3695c0.58712 0.24247 1.2267 0.3347 1.8604 0.26676 0.7007-0.07512 1.3669-0.34313 1.9244-0.77423 0.5576-0.43111 
                    0.9846-1.0084 1.2336-1.6677 0.2491-0.65929 0.3104-1.3747 0.1771-2.0668z" 
                    stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Chỉnh sửa thông tin
            </button>
        </div>
    )
}