import { useState } from "react";
import OpenLayout from "./OpenLayout";
import InfoField from "./InfoField";

export default function Price() {
    const [open, setOpen] = useState(false);

    const arr = ["월세", "보증금", "관리비"];
    return (
        <OpenLayout open={open} setOpen={setOpen} title="가격 정보">
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
