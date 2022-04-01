import { useState } from "react";
import CategoryHeader from "components/common/CategoryHeader";
import CommonSelect from "../../common/Select";
export default function Floor() {
    const [elevatorCheck, setElevatorCheck] = useState(false);
    const selectArr = [
        {
            title: "전체층",
            selectArr: ["1층", "2층"],
        },
        {
            title: "해당층",
            selectArr: ["1층", "2층"],
        },
        {
            title: "",
            selectArr: ["원룸", "투룸", "분리형 원룸"],
        },
    ];
    return (
        <>
            <CategoryHeader title="층/구조" />
            <div className="w-full grid grid-cols-2 gap-room_register_gap">
                {selectArr.map((item, index) => (
                    <CommonSelect
                        title={item.title}
                        selectArr={item.selectArr}
                        key={index}
                    />
                ))}
                <div className="flex justify-end gap-2 items-center text-xl">
                    <label
                        htmlFor="noFee"
                        className={`inline-block before:content-[''] w-[1.6rem] h-[1.6rem] border  border-black mr-2  algin-middle  rounded-[0.3rem] text-center  ${
                            elevatorCheck &&
                            "before:content-['✔️']  bg-font_gray border-0"
                        }`}
                        onClick={() => setElevatorCheck(!elevatorCheck)}
                    ></label>
                    <input type="checkbox" id="noFee" className="hidden" />
                    <span>엘리베이터 있음</span>
                </div>
            </div>
        </>
    );
}
