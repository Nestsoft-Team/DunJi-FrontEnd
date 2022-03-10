import { useState } from "react";
import CategoryHeader from "../CategoryHeader";
import CommonBtn from "./CommonBtn";

export default function Option() {
    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);
    const [btn4Check, setBtn4Check] = useState(false);
    const [btn5Check, setBtn5Check] = useState(false);
    const [btn6Check, setBtn6Check] = useState(false);
    const [btn7Check, setBtn7Check] = useState(false);
    const [btn8Check, setBtn8Check] = useState(false);
    const [btn9Check, setBtn9Check] = useState(false);
    const [btn10Check, setBtn10Check] = useState(false);
    const [btn11Check, setBtn11Check] = useState(false);
    const [btn12Check, setBtn12Check] = useState(false);

    const arr = [
        { var: btn1Check, varHandler: setBtn1Check, value: "에어컨" },
        { var: btn2Check, varHandler: setBtn2Check, value: "냉장고" },
        { var: btn3Check, varHandler: setBtn3Check, value: "세탁기" },
        { var: btn4Check, varHandler: setBtn4Check, value: "가스레인지" },
        { var: btn5Check, varHandler: setBtn5Check, value: "인덕션" },
        { var: btn6Check, varHandler: setBtn6Check, value: "전자레인지" },
        { var: btn7Check, varHandler: setBtn7Check, value: "책상" },
        { var: btn8Check, varHandler: setBtn8Check, value: "책장" },
        { var: btn9Check, varHandler: setBtn9Check, value: "침대" },
        { var: btn10Check, varHandler: setBtn10Check, value: "옷장" },
        { var: btn11Check, varHandler: setBtn11Check, value: "신발장" },
        { var: btn12Check, varHandler: setBtn12Check, value: "싱크대" },
    ];

    return (
        <>
            <CategoryHeader title="옵션" />
            <div className=" grid grid-cols-3 gap-room_register_gap ">
                {arr.map((item, index) => (
                    <CommonBtn
                        key={index}
                        value={item.value}
                        check={item.var}
                        checkHandler={item.varHandler}
                    />
                ))}
            </div>
        </>
    );
}