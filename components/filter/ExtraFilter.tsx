import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CommonBtn from "../common/Btn";
import { RootState } from "store";
import CategoryHeader2 from "components/common/CategoryHeader2";

export default function TransactionType() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);
    const [btn4Check, setBtn4Check] = useState(false);
    const [btn5Check, setBtn5Check] = useState(false);
    const [btn6Check, setBtn6Check] = useState(false);

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "주차가능",
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "보안/안전시설",
        },
        {
            check: btn3Check,
            checkHandler: setBtn3Check,
            type: "풀옵션",
        },
        {
            check: btn4Check,
            checkHandler: setBtn4Check,
            type: "빌트인",
        },
        {
            check: btn5Check,
            checkHandler: setBtn5Check,
            type: "엘리베이터",
        },
        {
            check: btn6Check,
            checkHandler: setBtn6Check,
            type: "360° VR",
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
            <CategoryHeader2 title="추가필터" />
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
            <div className="text-lg text-font_gray my-6">
                * 풀옵션 항목은 세탁기, 냉장고, 에어컨, 가스레인지 또는
                인덕션입니다.
            </div>
        </>
    );
}
