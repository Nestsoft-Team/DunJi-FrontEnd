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

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "주",
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "일",
        },
        {
            check: btn3Check,
            checkHandler: setBtn3Check,
            type: "월세",
        },
        {
            check: btn4Check,
            checkHandler: setBtn4Check,
            type: "전세",
        },
        {
            check: btn5Check,
            checkHandler: setBtn5Check,
            type: "반전세",
        },
    ];

    return (
        <>
            <CategoryHeader2 title="가격 단위" />
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
