import { useState } from "react";
import OpenLayout from "./OpenLayout";
import InfoField from "./InfoField";

type propsType = {
    price: number;
    deposit: number;
    manageElec: number;
    manageGas: number;
    manageWater: number;
    manageInternet: number;
    manageTV: number;
    manageCost: number;
};

export default function Price({
    price,
    deposit,
    manageCost,
    manageElec,
    manageGas,
    manageWater,
    manageInternet,
    manageTV,
}: propsType) {
    const [open, setOpen] = useState(false);

    const optionArr = [
        { value: manageElec, type: "전기" },
        { value: manageGas, type: "가스" },
        { value: manageWater, type: "수도" },
        { value: manageInternet, type: "인터넷" },
        { value: manageTV, type: "티비" },
    ];

    let optionString = "";
    optionArr.forEach((item, index) => {
        if (item.value) {
            optionString += item.type + ", ";
        }
        if (index === optionArr.length - 1 && optionString !== "")
            optionString = optionString.slice(0, -2);
    });

    const arr = [
        {
            title: "월세",
            data: price + "만원",
        },
        { title: "보증금", data: deposit + "만원" },
        {
            title: "관리비",
            data: manageCost + "만원" + " (" + optionString + ")",
        },
    ];
    return (
        <OpenLayout open={open} setOpen={setOpen} title="가격 정보">
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
