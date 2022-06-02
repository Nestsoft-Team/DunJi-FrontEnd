import { useState } from "react";
import OpenLayout from "./OpenLayout";
import InfoField from "./InfoField";

export default function Review() {
    const [open, setOpen] = useState(false);

    const arr = [
        "입주가능일",
        "입주기간",
        "면적(전용)",
        "층수",
        "구조",
        "방향",
        "난방종류",
        "준공날짜",
        "건물종류",
        "입주가능일",
        "주소",
    ];
    return (
        <OpenLayout open={open} setOpen={setOpen} title="방 정보">
            {arr.map((item, index) => (
                <InfoField
                    key={index}
                    title={item}
                    content="즉시 입주"
                    last={index !== arr.length - 1}
                />
            ))}
        </OpenLayout>
    );
}
