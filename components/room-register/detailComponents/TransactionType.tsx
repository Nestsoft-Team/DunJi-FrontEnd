import { useEffect, useState } from "react";
import CategoryHeader from "./CategoryHeader";
import CommonBtn from "./CommonBtn";

export default function TransactionType() {
    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);

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
            <div className="w-full flex gap-2 h-16 ">
                <CommonBtn
                    value="월세"
                    check={btn1Check}
                    checkHandler={setBtn1Check}
                />
                <CommonBtn
                    value="전세"
                    check={btn2Check}
                    checkHandler={setBtn2Check}
                />
                <CommonBtn
                    value="매매"
                    check={btn3Check}
                    checkHandler={setBtn3Check}
                />
            </div>
        </>
    );
}
