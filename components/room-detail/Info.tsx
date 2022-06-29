import { useState } from "react";
import OpenLayout from "./OpenLayout";
import InfoField from "./InfoField";

type propsType = {
    availPeriodFrom: string;
    availPeriodTo: string;
    availPeriodConsul: boolean;
    roomSize: string;
    floor: number;
    struct: string;
    detailAddress: string;
};
export default function Review({
    availPeriodFrom,
    availPeriodTo,
    availPeriodConsul,
    roomSize,
    floor,
    struct,
    detailAddress,
}: propsType) {
    const [open, setOpen] = useState(false);
    const arr = [
        {
            title: "입주가능일",
            data:
                availPeriodFrom +
                " 부터 " +
                availPeriodTo +
                " " +
                (availPeriodConsul ? "(협의가능)" : "(협의불가)"),
        },
        { title: "면적", data: roomSize + "m2" },
        { title: "층수", data: floor + "층" },
        { title: "구조", data: struct },
        { title: "상세주소", data: detailAddress },
    ];
    return (
        <OpenLayout open={open} setOpen={setOpen} title="방 정보">
            {arr.map((item, index) => (
                <InfoField
                    key={index}
                    title={item.title}
                    content={item.data}
                    last={index !== arr.length - 1}
                />
            ))}
        </OpenLayout>
    );
}
