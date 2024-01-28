import clsx from "clsx";
import style from "./formChooseTinChi.module.css";
import { useEffect, useState } from "react"; 
import TableAt18 from "../tableAt18";

interface activeClose {
    closeForm: () => void;
}

const ChooseTinChiForm: React.FC<activeClose> = ({ closeForm }) => {
    const [showAt18, setShowAt18] = useState(false);
    const handleShowAt18 = () => {
        setShowAt18(!showAt18);
}

    return (
        <div className={clsx(style.formContainer)}>
            <div className={clsx(style.container)}>
                <div className={clsx(style.btnContainer)}>
                    <button className={clsx(style.btnReset)}>RESET</button>
                    <button onClick={closeForm} className={clsx(style.btnClose)}>Close</button>
                </div>
                <div className={clsx(style.listClass)}>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>AT18</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                        {showAt18 &&(
                            <div className={clsx(style.tableClass)}>
                                <TableAt18 />
                            </div>
                        )}
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>AT19</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>CT04</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>CT06</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>CT07</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>DT5</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>DT6</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>TT17</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>TT4</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <div onClick={handleShowAt18} className={clsx(style.titleClass)}>
                            <p>TT5</p>
                            <p>{showAt18 ? "-" : "+"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseTinChiForm