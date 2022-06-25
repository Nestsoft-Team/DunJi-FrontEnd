import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import CategoryHeader from "components/common/CategoryHeader";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { ChangeEvent, useEffect, useState } from "react";
import { dispatchDeposit, dispatchPrice } from "store/modules/roomRegister";

export default function Price() {
    const [state, dispatch] = useRoomRegisterRedux();

    const unit = state.priceUnit;
    const deposit = state.deposit;
    const price = state.price;
    const [unitPlaceHolder, setUnitPlaceHolder] = useState("월세");

    const priceArr = [
        {
            value: deposit,
            valueHandler: dispatchDeposit,
            placeHolder: "보증금",
        },
        {
            value: price,
            valueHandler: dispatchPrice,
            placeHolder: unitPlaceHolder,
        },
    ];

    const onChangeHandler = (
        { target: { value } }: ChangeEvent<HTMLInputElement>,
        handler: ActionCreatorWithPayload<any, string>
    ) => {
        if (value !== "" && value !== "0") {
            const num = Number(value);
            if (num < 999999999999999 && num > 0) dispatch(handler(num));
        } else {
            dispatch(handler(""));
        }
    };

    useEffect(() => {
        const unitHandler = () => {
            if (unit === "주세") setUnitPlaceHolder(unit);
            else if (unit === "일세") setUnitPlaceHolder(unit);
            else setUnitPlaceHolder("월세");
        };
        unitHandler();
    }, [unit]);

    return (
        <>
            <CategoryHeader title="가격" />
            <div className="  mb-4 w-full rounded-standard_rounded overflow-hidden">
                {priceArr.map(
                    (item, index) =>
                        (unit !== "전세" || index === 0) && (
                            <div className="relative" key={index}>
                                <input
                                    type="number"
                                    className={`h-room_register_btn_height2 w-full text-xl pl-4 placeholder-font_gray outline-0   ${
                                        index === 0 && "border-b"
                                    }`}
                                    placeholder={item.placeHolder}
                                    value={item.value}
                                    onChange={(e) => {
                                        onChangeHandler(e, item.valueHandler);
                                    }}
                                />
                                <div
                                    className="absolute  text-xl
            right-8 bottom-[50%] translate-y-[50%] "
                                >
                                    만원
                                </div>
                            </div>
                        )
                )}
            </div>
        </>
    );
}
