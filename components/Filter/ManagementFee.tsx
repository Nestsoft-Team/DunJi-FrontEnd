import { Dispatch, SetStateAction, useState } from "react";
import CategoryHeader2 from "components/common/CategoryHeader2";
import CommonBtn from "components/common/Btn";

export default function Price() {
    const [fee, setFee] = useState("");
    const [noFeeCheck, setNoFeeCheck] = useState(false);
    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);

    const feeOptionHandler = () => {
        if (noFeeCheck === false) {
            setBtn1Check(false);
            setBtn2Check(false);
            setBtn3Check(false);
        }
        setNoFeeCheck(!noFeeCheck);
    };

    const checkHandler = (
        check: boolean,
        handler: Dispatch<SetStateAction<boolean>>
    ) => {
        if (noFeeCheck !== true) {
            handler(!check);
        }
    };

    const btnArr = [
        { value: "1/n 분납", check: btn1Check, checkHandler: setBtn1Check },
        { value: "5만원 이하", check: btn2Check, checkHandler: setBtn2Check },
        { value: "5만원 초과", check: btn3Check, checkHandler: setBtn3Check },
    ];

    return (
        <>
            <div className="flex items-center justify-between py-4 text-2xl border-t border-border_color mt-8">
                <div>
                    관리비
                    <span className="text-font_gray text-lg">
                        &nbsp;중복 선택 가능
                    </span>
                </div>
                <div className="flex justify-end gap-2 items-center text-xl text-font_gray">
                    <label
                        htmlFor="noFee"
                        className={`inline-block before:content-[''] w-[1.6rem] h-[1.6rem] border  border-font_gray mr-2  rounded-[0.3rem] text-center  ${
                            noFeeCheck &&
                            "before:content-['✔️']  bg-font_gray border-0"
                        }`}
                        onClick={() => feeOptionHandler()}
                    ></label>
                    <input type="checkbox" id="noFee" className="hidden" />
                    <span>관리비 없음</span>
                </div>
            </div>
            <div className="w-full grid grid-cols-3  gap-room_register_gap">
                {btnArr.map((item, index) => (
                    <CommonBtn
                        key={index}
                        value={item.value}
                        check={item.check}
                        checkHandler={() =>
                            checkHandler(item.check, item.checkHandler)
                        }
                    ></CommonBtn>
                ))}
            </div>
        </>
    );
}
