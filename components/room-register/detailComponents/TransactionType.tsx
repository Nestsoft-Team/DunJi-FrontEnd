import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CommonBtn from "./CommonBtn";
import { RootState } from "store";

export default function TransactionType() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);

    const btnArr = [
        {
            value: btn1Check,
            valueHandler: setBtn1Check,
            type: "월세",
        },
        {
            value: btn2Check,
            valueHandler: setBtn2Check,
            type: "전세",
        },
        {
            value: btn3Check,
            valueHandler: setBtn3Check,
            type: "매매",
        },
    ];

    useEffect(() => {
        if (btn1Check) {
            setBtn2Check(false);
            setBtn3Check(false);
        }
    }, [btn1Check]);
    useEffect(() => {
        if (btn2Check) {
            setBtn1Check(false);
            setBtn3Check(false);
        }
    }, [btn2Check]);
    useEffect(() => {
        if (btn3Check) {
            setBtn1Check(false);
            setBtn2Check(false);
        }
    }, [btn3Check]);

    return (
        <>
            <div className="py-6  text-orange text-2xl">거래유형</div>
            <div className="w-full flex gap-room_register_gap  h-room_register_btn_height1">
                {btnArr.map((item, index) => (
                    <CommonBtn
                        key={index}
                        value={item.type}
                        check={item.value}
                        checkHandler={item.valueHandler}
                    />
                ))}
            </div>
        </>
    );
}
