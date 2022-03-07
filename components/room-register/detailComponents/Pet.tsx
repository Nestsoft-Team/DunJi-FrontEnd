import { useEffect, useState } from "react";
import CategoryHeader from "../CategoryHeader";
import CommonBtn from "./CommonBtn";

export default function Pet() {
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
            <CategoryHeader title="애완동물" />

            <div className="w-full flex gap-room_register_gap">
                <CommonBtn
                    value="가능"
                    check={btn1Check}
                    checkHandler={setBtn1Check}
                />

                <CommonBtn
                    value="불가능"
                    check={btn2Check}
                    checkHandler={setBtn2Check}
                />
            </div>
        </>
    );
}
