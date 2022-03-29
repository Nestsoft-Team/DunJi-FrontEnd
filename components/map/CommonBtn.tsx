import { Dispatch, SetStateAction } from "react";

type propsType = {
    value: string;
    check: Boolean;
    checkHandler: Dispatch<
        SetStateAction<{
            value: string;
            check: boolean;
        }>
    >;
};

export default function CommonBtn({ value, check, checkHandler }: propsType) {
    return (
        <button
            className={` focus-bg-black rounded-[0.5rem] h-full px-4 text-[1rem] text-font_gray border border-border_color ${
                check && "bg-font_gray  text-component_white border-font_gray"
            } `}
            onClick={() => {
                checkHandler({ value, check: !check });
            }}
        >
            {value}
        </button>
    );
}
