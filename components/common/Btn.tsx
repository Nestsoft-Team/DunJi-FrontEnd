import { Dispatch, SetStateAction } from "react";

type propsType = {
    value: string;
    check: boolean;
    checkHandler: Dispatch<SetStateAction<boolean>>;
};

export default function CommonBtn({ value, check, checkHandler }: propsType) {
    return (
        <button
            className={`focus-bg-black  rounded-standard_rounded h-room_register_btn_height1 w-full   text-[1.3rem]   ${
                check
                    ? "bg-font_gray border-0 text-white"
                    : "border border-font_gray"
            } `}
            onClick={() => {
                checkHandler(!check);
            }}
        >
            {value}
        </button>
    );
}
