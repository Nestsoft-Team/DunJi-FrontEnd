import { useState } from "react";

type propsType = {
    title: string;
    score: number;
    last: boolean;
};

export default function ScoreInfoField({ title, score, last }: propsType) {
    const [percentage] = useState(
        "w-[" + Math.round((score / 5.0) * 100) + "%]"
    );

    return (
        <div
            className={`${
                last && `border-b border-border_color`
            } py-4 text-[1.2rem] grid grid-cols-2`}
        >
            <span className="text-font_gray">{title}</span>
            <div className="flex items-center">
                <div className="bg-border_color w-[80%] h-2 rounded-[10rem] mr-4 relative">
                    <div
                        className={`${percentage} w-[85%] top-0 left-0 absolute bg-black h-2 rounded-[10rem]`}
                    />
                </div>
                <div className="ml-auto">{score}</div>
            </div>
        </div>
    );
}
