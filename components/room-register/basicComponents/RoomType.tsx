import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CommonBtn from "../../common/Btn";
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

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "원룸",
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "투룸",
        },
        {
            check: btn3Check,
            checkHandler: setBtn3Check,
            type: "쓰리룸 이상",
        },
        {
            check: btn4Check,
            checkHandler: setBtn4Check,
            type: "반지하",
        },
        {
            check: btn5Check,
            checkHandler: setBtn5Check,
            type: "옥탑방",
        },
    ];
    useEffect(() => {
        if (btn1Check) {
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn4Check(false);
            setBtn5Check(false);
        }
    }, [btn1Check]);
    useEffect(() => {
        if (btn2Check) {
            setBtn1Check(false);
            setBtn3Check(false);
            setBtn4Check(false);
            setBtn5Check(false);
        }
    }, [btn2Check]);
    useEffect(() => {
        if (btn3Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn4Check(false);
            setBtn5Check(false);
        }
    }, [btn3Check]);
    useEffect(() => {
        if (btn4Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn5Check(false);
        }
    }, [btn4Check]);
    useEffect(() => {
        if (btn5Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn4Check(false);
        }
    }, [btn5Check]);

    return (
        <>
            <div className="py-4 text-2xl  mt-8">방 종류</div>
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
