import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type propsType = {
    arr: Array<string>;
    title: string;
    openHandler: Dispatch<SetStateAction<boolean>>;
    dispatchHandler: ActionCreatorWithPayload<any, string>;
};

export default function Modal({
    arr,
    title,
    openHandler,
    dispatchHandler,
}: propsType) {
    const [state, dispatch] = useRoomRegisterRedux();

    const onClick = (index: number) => {
        // 1층...의 경우 분리 후 number로 변환.  분리형...의 구조는 그대로 dispatch
        if (arr[index].substr(-1) === "층") {
            dispatch(dispatchHandler(Number(arr[index].slice(0, -1))));
        } else dispatch(dispatchHandler(arr[index]));
    };

    const [value, setValue] = useState("");

    useEffect(() => {
        if (value !== "") dispatch(dispatchHandler(Number(value)));
        else dispatch(dispatchHandler(title));
    }, [value, dispatch, dispatchHandler, title]);
    return (
        <div className="absolute top-0 left-0 bg-black/[0.5]  w-screen h-[100%] flex-col items-center flex z-50">
            <div className="rounded-standard_rounded  w-64 bg-component_white text-xl mt-[82rem]">
                <div className="relative border-b h-14 flex flex-col items-center justify-center">
                    {title}
                    <FontAwesomeIcon
                        onClick={() => openHandler(false)}
                        className="absolute right-4 text-font_gray"
                        icon="x"
                    />
                </div>
                {arr.map((item, index) => (
                    <div
                        className="h-14 flex flex-col items-center justify-center hover:text-main"
                        key={index}
                        onClick={() => onClick(index)}
                    >
                        {item}
                    </div>
                ))}
                <div className="w-full text-center">
                    {title !== "구조" && (
                        <input
                            type="text"
                            maxLength={2}
                            className="text-center h-14 bg-component_white outline-0  placeholder:text-black hover:text-main"
                            placeholder="직접입력"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
