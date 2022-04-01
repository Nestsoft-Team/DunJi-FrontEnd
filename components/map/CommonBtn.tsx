import { Dispatch, SetStateAction } from "react";

type propsType = {
    value: String;
    check: Boolean;
    checkHandler: Dispatch<SetStateAction<boolean>>;
};

export default function CommonBtn({ value, check, checkHandler }: propsType) {
    return (
        <button
            className={`focus-bg-black  text-font_gray rounded-[0.5rem] h-full  px-3  text-[1rem]  border border-border_color ${
                check
                    ? "bg-font_gray  text-component_white"
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
