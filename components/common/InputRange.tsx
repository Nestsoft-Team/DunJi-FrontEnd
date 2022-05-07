import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

export default function InputRange() {
    const [min1, setMin1] = useState(0);
    const [max1, setMax1] = useState(100);
    const [min2, setMin2] = useState(0);
    const [max2, setMax2] = useState(1000);
    const [noFeeCheck, setNoFeeCheck] = useState(false);
    return (
        <div className="my-8 py-4 border-t border-border_color">
            <div className="text-2xl flex justify-between ">
                <span>월세</span>
                <span>{max1}만원</span>
            </div>
            <div className="px-4 py-2">
                <Slider
                    range
                    allowCross={false}
                    defaultValue={[min1, max1]}
                    onChange={(e: number | number[]) => {
                        if (typeof e === "object") setMin1(e[0]);
                        if (typeof e === "object") setMin1(e[1]);
                    }}
                />
            </div>
            <div className="text-lg grid grid-cols-3 text-font_gray">
                <span>0만원</span>
                <span className="text-center">50만</span>
                <span className="text-right">100만이상</span>
            </div>
            <div className="text-2xl flex justify-between mt-4">
                <span>보증금</span>
                <span>{max2}만원</span>
            </div>
            <div className="px-4 py-2">
                <Slider
                    range
                    allowCross={false}
                    defaultValue={[min2, max2]}
                    max={1000}
                    onChange={(e: any) => {
                        if (!noFeeCheck) {
                            setMin2(e[0]);
                            setMax2(e[1]);
                        } else {
                            setMin2(0);
                            setMax2(1000);
                        }
                    }}
                />
            </div>
            <div className="text-lg grid grid-cols-3 text-font_gray">
                <span>0만원</span>
                <span className="text-center">500만</span>
                <span className="text-right">1000만이상</span>
            </div>
            <div className="flex justify-start gap-2 items-center text-lg text-font_gray">
                <label
                    htmlFor="noFee"
                    className={`inline-block before:content-[''] w-[1.4rem] h-[1.4rem] border  border-font_gray mr-2  algin-middle  rounded-[0.3rem] text-center  ${
                        noFeeCheck &&
                        "before:content-['✔️']  bg-font_gray border-0"
                    }`}
                    onClick={() => setNoFeeCheck(!noFeeCheck)}
                ></label>
                <input type="checkbox" id="noFee" className="hidden" />
                <span>보증금 없음</span>
            </div>
        </div>
    );
}
