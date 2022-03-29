import { useState } from "react";
import CategoryHeader from "../CategoryHeader";

export default function Price() {
    const [deposit, setDeposit] = useState("");
    const [monthly, setMonthly] = useState("");

    const priceArr = [
        { value: deposit, valueHandler: setDeposit, placeHolder: "보증금" },
        { value: monthly, valueHandler: setMonthly, placeHolder: "월세" },
    ];
    return (
        <>
            <CategoryHeader title="가격" />
            <div className="  mb-4 w-full rounded-room_register_rounded overflow-hidden">
                {priceArr.map((item, index) => (
                    <div className="relative" key={index}>
                        <input
                            type="number"
                            className={`h-room_register_btn_height2 w-full text-xl pl-4 placeholder-font_gray outline-0   ${
                                index === 0 && "border-b"
                            }`}
                            placeholder={item.placeHolder}
                            value={item.value}
                            onChange={(e) => {
                                item.valueHandler(e.target.value);
                            }}
                        ></input>
                        <div
                            className="absolute  text-xl
            right-8 bottom-[50%] translate-y-[50%] "
                        >
                            만원
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
