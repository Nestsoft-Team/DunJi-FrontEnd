import { useEffect, useState } from "react";
import CategoryHeader from "../CategoryHeader";
import CommonBtn from "./CommonBtn";

export default function Owner() {
    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);

    useEffect(() => {
        if (btn1Check) setBtn2Check(false);
    }, [btn1Check]);
    useEffect(() => {
        if (btn2Check) setBtn1Check(false);
    }, [btn2Check]);

    return (
        <>
            <CategoryHeader title="집 주인이신가요?" />
            <div className="w-full flex gap-room_register_gap">
                <CommonBtn
                    value="예"
                    check={btn1Check}
                    checkHandler={setBtn1Check}
                />

                <CommonBtn
                    value="아니오"
                    check={btn2Check}
                    checkHandler={setBtn2Check}
                />
            </div>
        </>
    );
}
