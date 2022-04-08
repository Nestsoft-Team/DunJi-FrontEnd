import { useState } from "react";
import CategoryHeader from "components/common/CategoryHeader";
import CommonBtn from "../../common/Btn";

export default function Price() {
    const [fee, setFee] = useState("");
    const [noFeeCheck, setNoFeeCheck] = useState(false);
    const [negotiable, setNegotiable] = useState(false);
    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);
    const [btn4Check, setBtn4Check] = useState(false);
    const [btn5Check, setBtn5Check] = useState(false);

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
            <div className="w-full grid grid-cols-[2fr_1fr] h-[3.5rem] mb-4">
                <div className="relative h-full mb-4">
                    <input
                        type="number"
                        className="bg-transparent border border-font_gray w-full rounded-room_register_rounded h-full text-xl pl-4 placeholder-font_gray outline-0"
                        placeholder="관리비"
                        value={fee}
                        onChange={(e) => {
                            feeHandler(e.target.value);
                        }}
                    ></input>
                    <div
                        className="absolute  text-xl
            right-8 bottom-[50%] translate-y-[50%]"
                    >
                        만원
                    </div>
                </div>
                <div className="flex justify-end gap-2 items-center text-xl">
                    <label
                        htmlFor="noFee"
                        className={`inline-block before:content-[''] w-[1.6rem] h-[1.6rem] border  border-black mr-2  algin-middle  rounded-[0.3rem] text-center  ${
                            noFeeCheck &&
                            "before:content-['✔️']  bg-font_gray border-0"
                        }`}
                        onClick={() =>
                            feeOptionHandler(noFeeCheck, setNoFeeCheck)
                        }
                    ></label>
                    <input type="checkbox" id="noFee" className="hidden" />
                    <span>관리비 없음</span>
                </div>
            </div>
            <div className="w-full grid grid-cols-3 h-[7rem] gap-2">
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
