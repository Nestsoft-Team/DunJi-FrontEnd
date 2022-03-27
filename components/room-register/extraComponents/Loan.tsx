import { useEffect, useState } from "react";
import ChooseOneBtn from "../components/ChooseOneBtn";

export default function Parking() {
    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);

    useEffect(() => {
        if (btn1Check) setBtn2Check(false);
    }, [btn1Check]);
    useEffect(() => {
        if (btn2Check) setBtn1Check(false);
    }, [btn2Check]);

    return (
        <div className="w-full grid grid-cols-[1fr_2fr] h-room_register_btn_height1 mt-4 text-[1.3rem] ">
            <div className="flex items-center h-full">전세대출</div>
            <ChooseOneBtn
                check1={btn1Check}
                check2={btn2Check}
                checkHandler1={setBtn1Check}
                checkHandler2={setBtn2Check}
            />
        </div>
    );
}
