import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

type propsType = {
    arr: Array<string>;
    title: string;
    handler: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ arr, title, handler }: propsType) {
    return (
        <div className="absolute top-0 left-0 bg-black/[0.5]  w-screen h-[100%] flex-col items-center flex z-50">
            <div className="rounded-standard_rounded  w-64 bg-component_white text-xl mt-[70rem]">
                <div className="relative border-b h-14 flex flex-col items-center justify-center">
                    {title}
                    <FontAwesomeIcon
                        onClick={() => handler(false)}
                        className="absolute right-4 text-font_gray"
                        icon="x"
                    />
                </div>
                {arr.map((item, index) => (
                    <div
                        className="h-14 flex flex-col items-center justify-center hover:text-main"
                        key={index}
                    >
                        {item}
                    </div>
                ))}
                <div className="w-full text-center">
                    <input
                        type="text"
                        maxLength={2}
                        className="text-center h-14 bg-component_white outline-0  placeholder:text-black hover:text-main"
                        placeholder="직접입력"
                    ></input>
                </div>
            </div>
        </div>
    );
}
