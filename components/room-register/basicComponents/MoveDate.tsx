import { useState } from "react";
import CategoryHeader from "components/common/CategoryHeader";

export default function MoveDate() {
    const [year, setYear] = useState<string>();
    const [month, setMonth] = useState<string>();
    const [day, setDay] = useState<string>();
    var yearArr = Array.from({ length: 50 }, (v, i) => i + 2022);
    var monthArr = Array.from({ length: 12 }, (v, i) => i + 1);
    var dayArr = Array.from({ length: 31 }, (v, i) => i + 1);

    const arr = [
        {
            value: year,
            valueHandler: setYear,
            arr: yearArr,
            type: "년",
        },
        {
            value: month,
            valueHandler: setMonth,
            arr: monthArr,
            type: "월",
        },
        {
            value: day,
            valueHandler: setDay,
            arr: dayArr,
            type: "일",
        },
    ];
    return (
        <>
            <CategoryHeader title="입주가능기간" />
            <div className="w-full flex gap-room_register_gap h-room_register_btn_height1">
                {arr.map((item, index) => (
                    <div key={index} className="relative h-full mb-4 w-full">
                        <select
                            onChange={(e) => item.valueHandler(e.target.value)}
                            className="bg-white border border-border_color w-full rounded-standard_rounded h-full text-xl pl-4 placeholder-black outline-0 focus:border-main"
                            value={item.value}
                        >
                            {item.arr.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                        <div
                            className="absolute text-border_color text-xl
                            right-8 bottom-[50%] translate-y-[50%]"
                        >
                            {item.type}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
