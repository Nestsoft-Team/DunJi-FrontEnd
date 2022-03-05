import { useEffect, useState } from "react";
import CategoryHeader from "./CategoryHeader";
import CommonBtn from "./CommonBtn";

export default function Price() {
    const [fee, setFee] = useState("");
    const [noFeeCheck, setNoFeeCheck] = useState(false);
    const [negotiable, setNegotiable] = useState(false);
    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);
    const [btn4Check, setBtn4Check] = useState(false);
    const [btn5Check, setBtn5Check] = useState(false);

    useEffect(() => {
        if (btn1Check) {
            setBtn1Check(true);
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn4Check(false);
            setBtn5Check(false);
        }
    }, [btn1Check]);
    useEffect(() => {
        if (btn2Check) {
            setBtn1Check(false);
            setBtn2Check(true);
            setBtn3Check(false);
            setBtn4Check(false);
            setBtn5Check(false);
        }
    }, [btn2Check]);
    useEffect(() => {
        if (btn3Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn3Check(true);
            setBtn4Check(false);
            setBtn5Check(false);
        }
    }, [btn3Check]);
    useEffect(() => {
        if (btn4Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn4Check(true);
            setBtn5Check(false);
        }
    }, [btn4Check]);
    useEffect(() => {
        if (btn5Check) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn3Check(false);
            setBtn4Check(false);
            setBtn5Check(true);
        }
    }, [btn5Check]);

    const feeHandler = (value: string) => {
        if (!noFeeCheck && !negotiable) {
            setFee(value);
        }
    };

    const feeOptionHandler = (value: boolean, handler: Function) => {
        setNoFeeCheck(false);
        setNegotiable(false);
        setFee("");
        handler(!value);
    };
    return (
        <>
            <CategoryHeader title="관리비" />
            <div className="relative h-16">
                <input
                    type="number"
                    className=" border border-border_color w-full rounded-room_register_rounded h-full text-xl pl-4 placeholder-black outline-0 focus:border-orange"
                    placeholder="관리비"
                    value={fee}
                    onChange={(e) => {
                        feeHandler(e.target.value);
                    }}
                ></input>
                <div
                    className="absolute text-border_color text-xl
                right-8 bottom-[50%] translate-y-[50%]"
                >
                    만원
                </div>
            </div>
            <div className="flex justify-end gap-2 text-border_color py-4">
                <label
                    htmlFor="noFee"
                    className={`inline-block before:content-[''] w-7 h-7 border border-border_color mr-2  algin-middle  rounded-md text-center ${
                        noFeeCheck ? "before:content-['✔️'] text-white " : ""
                    }`}
                    onClick={() => feeOptionHandler(noFeeCheck, setNoFeeCheck)}
                ></label>
                <input type="checkbox" id="noFee" className="hidden" />
                <span>관리비 없음</span>
                <label
                    htmlFor="negotiable"
                    className={`inline-block before:content-[''] w-7 h-7 border border-border_color mr-2  algin-middle  rounded-md text-center ${
                        negotiable ? "before:content-['✔️'] text-white " : ""
                    }`}
                    onClick={() => feeOptionHandler(negotiable, setNegotiable)}
                ></label>
                <input type="checkbox" id="negotiable" className="hidden" />
                <span>협의 가능</span>
            </div>
            <div className="w-full grid grid-cols-3 h-32 gap-2">
                <CommonBtn
                    value="전기세"
                    check={btn1Check}
                    checkHandler={setBtn1Check}
                ></CommonBtn>
                <CommonBtn
                    value="가스"
                    check={btn2Check}
                    checkHandler={setBtn2Check}
                ></CommonBtn>
                <CommonBtn
                    value="수도"
                    check={btn3Check}
                    checkHandler={setBtn3Check}
                ></CommonBtn>
                <CommonBtn
                    value="인터넷"
                    check={btn4Check}
                    checkHandler={setBtn4Check}
                ></CommonBtn>
                <CommonBtn
                    value="TV"
                    check={btn5Check}
                    checkHandler={setBtn5Check}
                ></CommonBtn>
            </div>
        </>
    );
}
