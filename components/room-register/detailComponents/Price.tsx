import { useState } from "react";
import CategoryHeader from "./CategoryHeader";
import CommonInput from "./CommonInput";

export default function Price() {
    const [deposit, setDeposit] = useState("");
    const [monthly, setMonthly] = useState("");
    return (
        <>
            <CategoryHeader title="가격" />
            <CommonInput
                value={deposit}
                setValue={setDeposit}
                placeHolder="보증금"
                unit="만원"
            />
            <CommonInput
                value={monthly}
                setValue={setMonthly}
                placeHolder="월세"
                unit="만원"
            />
        </>
    );
}
