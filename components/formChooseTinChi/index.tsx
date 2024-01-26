  import clsx from "clsx";
import style from "./formChooseTinChi.module.css";
import { useState } from "react";

export default function ChooseTinChiForm () {
    return (
        <div className={clsx(style.formContainer)}>
            <div className={clsx(style.container)}>
                <div className={clsx(style.btnContainer)}>
                    <button className={clsx(style.btnReset)}>RESET</button>
                    <button className={clsx(style.btnClose)}>Close</button>
                </div>
                <div className={clsx(style.listClass)}>
                    <div className={clsx(style.itemClass)}>
                        <p>AT18</p>
                        <p>+</p>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <p>AT19</p>
                        <p>+</p>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <p>CT04</p>
                        <p>+</p>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <p>CT06</p>
                        <p>+</p>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <p>CT07</p>
                        <p>+</p>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <p>DT5</p>
                        <p>+</p>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <p>DT6</p>
                        <p>+</p>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <p>TT17</p>
                        <p>+</p>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <p>TT4</p>
                        <p>+</p>
                    </div>
                    <div className={clsx(style.itemClass)}>
                        <p>TT5</p>
                        <p>+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}