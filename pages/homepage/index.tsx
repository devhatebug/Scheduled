"use client"
import clsx from "clsx";
import style from "./homePage.module.css";

export default function HomePage() {
    return (
        <div className={clsx(style.homePage)}>
            <div className={clsx(style.containerPage)}>
                <div className={clsx(style.titleWeb)}>Scheduled</div>
                <div className={clsx(style.lineItem)}></div>
                <div className={clsx(style.descriptionWeb)}>
                    <div>Website này là một nền tảng quản lý thời gian đa nhiệm, giúp người dùng dễ dàng xếp lịch, tạo thời khóa biểu và 
                        quản lý nhiệm vụ cũng như sự kiện cá nhân hoặc nhóm. Người dùng có thể tạo lịch cá nhân, tạo nhiệm vụ hàng ngày, 
                        hàng tuần, hoặc theo bất kỳ chu kỳ nào khác. Nền tảng này cung cấp giao diện thân thiện, dễ sử dụng, và tích hợp các 
                        tính năng như nhắc nhở, cảnh báo sự kiện, và ghi chú để giúp người dùng duy trì lịch trình hiệu quả. Đồng thời, nó còn 
                        hỗ trợ tính năng tạo sự kiện tạo ra một trải nghiệm quản lý thời gian toàn diện. 
                    </div>
                    <br />
                    <div>
                        Bên cạnh đó, đối với sinh viên <span className="font-bold italic">Học Viện Kỹ Thuật Mật Mã</span> sẽ có api hỗ trợ xếp lịch, đăng kí tín chỉ theo đúng môn học của 
                        năm đó ( đúng với học kì của năm ) khi bạn có mã sinh viên.
                    </div>
                </div>

                <div className={clsx(style.infoWeb)}>
                    <div className={clsx(style.titleCategory)}>Thông tin</div>
                    <ul className={clsx(style.listInfo)}>
                        <li>Phiên bản (version) : v1.0.0</li>
                        <li>Ngày ra mắt (meeting day) : 10/03/2024</li>
                        <li>Đội ngũ phát triển (development team) : <a href="https://www/fayedark/com/" target="_blank">Fayedark</a></li>
                        <li>Quản lí dự án (project manager) : <a href="https://www.facebook.com/tgiap.dev" target="_blank">Devt</a></li>
                        <li>Link github : <a href="" target="_blank">Scheduled</a></li>
                    </ul>
                </div>

                <div className={clsx(style.contactWeb)}>
                    <div className={clsx(style.titleCategory)}>Liên hệ</div>
                    <ul className={clsx(style.listContact)}>
                        <li>Facebook : <a href="https://www.facebook.com/tgiap.dev" target="_blank">https://www.facebook.com/tgiap.dev</a></li>
                        <li>Telegram : <a href="https://www.telegram.org/k/#@DevT28" target="_blank">@DevT28</a></li>
                        <li>Email : <a href="mailto:togiap.dev@gmail.com" target="_blank">togiap.dev@gmail.com</a></li>
                        <li>Donate me : STK : <a>28112004 - MBBANK</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}