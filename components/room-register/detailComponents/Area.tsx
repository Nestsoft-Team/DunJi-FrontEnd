import { useState } from "react";
import CategoryHeader from "./CategoryHeader";

export default function Area() {
    const [pyeong, setPyeong] = useState("");
    const [squareMeter, setSquareMeter] = useState("");

    return (
        <>
            <CategoryHeader title="전용 면적 (실평수)" />
            <div className="flex gap-room_register_gap">
                <div className="relative h-room_register_btn_height2 mb-4 w-full">
                    <input
                        type="number"
                        className=" border border-border_color w-full rounded-room_register_rounded h-full text-xl pl-4 placeholder-black outline-0 focus:border-orange"
                        placeholder="평"
                        value={pyeong}
                        onChange={(e) => {
                            setPyeong(e.target.value);
                        }}
                        onBlur={() => {
                            setSquareMeter((Number(pyeong) * 3.3).toFixed(1));
                        }}
                    ></input>
                    <div
                        className="absolute text-border_color text-xl
            right-8 bottom-[50%] translate-y-[50%]"
                    >
                        평
                    </div>
                </div>
                <div className="relative h-room_register_btn_height2 mb-4 w-full">
                    <input
                        type="number"
                        className=" border border-border_color w-full rounded-room_register_rounded h-full text-xl pl-4 placeholder-black outline-0 focus:border-orange"
                        placeholder="m2"
                        value={squareMeter}
                        onChange={(e) => {
                            setSquareMeter(e.target.value);
                        }}
                        onBlur={() => {
                            setPyeong((Number(squareMeter) / 3.3).toFixed(1));
                        }}
                    ></input>
                    <div
                        className="absolute text-border_color text-xl
            right-8 bottom-[50%] translate-y-[50%]"
                    >
                        m2
                    </div>
                </div>
            </div>
        </>
    );
}
