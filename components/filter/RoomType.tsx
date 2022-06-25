import { useState } from "react";
import CommonBtn from "../common/Btn";

export default function TransactionType() {
    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);
    const [btn4Check, setBtn4Check] = useState(false);
    const [btn5Check, setBtn5Check] = useState(false);

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "원룸",
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "투. 쓰리룸",
        },
        {
            check: btn3Check,
            checkHandler: setBtn3Check,
            type: "오피스텔",
        },
        {
            check: btn4Check,
            checkHandler: setBtn4Check,
            type: "아파트",
        },
        {
            check: btn5Check,
            checkHandler: setBtn5Check,
            type: "공공주택",
        },
    ];

    return (
        <>
            <div className="py-6 text-2xl flex items-center">
                방 종류
                <span className="text-lg text-font_gray">
                    &nbsp;중복 선택 가능
                </span>
            </div>
            <div className="w-full grid grid-cols-3 gap-room_register_gap">
                {btnArr.map((item, index) => (
                    <CommonBtn
                        key={index}
                        value={item.type}
                        check={item.check}
                        checkHandler={item.checkHandler}
                    />
                ))}
            </div>
        </>
    );
}
