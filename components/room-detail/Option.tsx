import { useState } from "react";
import OpenLayout from "./OpenLayout";
import InfoField from "./InfoField";

export default function Option() {
    const [open, setOpen] = useState(false);

    const arr = ["TV", "냉장고", "세탁기", "침대", "가스레인지", "신발장"];
    return (
        <OpenLayout open={open} setOpen={setOpen} title="옵션 정보">
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
