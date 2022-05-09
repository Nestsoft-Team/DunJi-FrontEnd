import { Dispatch, SetStateAction } from "react";

type propsType = {
    check1: boolean;
    check2: boolean;
    checkHandler1: Dispatch<SetStateAction<boolean>>;
    checkHandler2: Dispatch<SetStateAction<boolean>>;
};

export default function ChooseOneBtn({
    check1,
    check2,
    checkHandler1,
    checkHandler2,
}: propsType) {
    return (
        <div className=" rounded-standard_rounded overflow-hidden text-black  grid grid-cols-2 border-[0.1rem] border-font_gray items-center h-full">
            <button
                className={`border-r-[0.1rem]  border-font_gray h-full ${
                    check1 && "text-white bg-font_gray"
                }`}
                onClick={() => checkHandler1(!check1)}
            >
                가능
            </button>
            <button
                className={` h-full ${check2 && "text-white bg-font_gray"}`}
                onClick={() => checkHandler2(!check2)}
            >
                불가능
            </button>
        </div>
    );
}
