import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CommonBtn from "../common/Btn";
import { RootState } from "store";
import CategoryHeader from "components/common/CategoryHeader";

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
            type: "전체",
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "1년 이내",
        },
        {
            check: btn3Check,
            checkHandler: setBtn3Check,
            type: "5년 이내",
        },
        {
            check: btn4Check,
            checkHandler: setBtn4Check,
            type: "10년 이내",
        },
        {
            check: btn5Check,
            checkHandler: setBtn5Check,
            type: "15년 이내",
        },
        {
            check: btn6Check,
            checkHandler: setBtn6Check,
            type: "15년 이상",
        },
    ];
    useEffect(() => {
        if (btn1Check) {
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn4Check(false);
            setBtn5Check(false);
            setBtn6Check(false);
        }
    }, [btn1Check]);
    useEffect(() => {
        if (btn2Check) {
            setBtn1Check(false);
            setBtn3Check(false);
            setBtn4Check(false);
            setBtn5Check(false);
            setBtn6Check(false);
        }
    }, [btn2Check]);
    useEffect(() => {
        if (btn3Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn4Check(false);
            setBtn5Check(false);
            setBtn6Check(false);
        }
    }, [btn3Check]);
    useEffect(() => {
        if (btn4Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn5Check(false);
            setBtn6Check(false);
        }
    }, [btn4Check]);
    useEffect(() => {
        if (btn5Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn4Check(false);
            setBtn6Check(false);
        }
    }, [btn5Check]);
    useEffect(() => {
        if (btn6Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn4Check(false);
            setBtn5Check(false);
        }
    }, [btn6Check]);
    return (
        <>
            {/* 카테고리헤더 옆 별 처리 필요 */}
            <CategoryHeader title="사용승인일" />
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
