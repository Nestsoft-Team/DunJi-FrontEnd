import { useState } from "react";
import OpenLayout from "./OpenLayout";
import ScoreInfoField from "./ScoreInfoField";

export default function LifeInfo() {
    const [open, setOpen] = useState(false);

    const arr = [
        "의사소통",
        "위치 및 교통편",
        "가격대비 만족도",
        "청결도",
        "방음",
        "편의시설",
    ];
    return (
        <OpenLayout open={open} setOpen={setOpen} title="생활 정보">
            {arr.map((item, index) => (
                <ScoreInfoField
                    key={index}
                    title={item}
                    score={3.6}
                    last={index !== arr.length - 1}
                />
            ))}
        </OpenLayout>
    );
}
