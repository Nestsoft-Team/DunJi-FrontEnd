type propsType = {
    value: string;
    check: boolean;
    index: number;
    checkHandler: (index: number) => void;
};

export default function NoDuplicateSelectBtn({
    value,
    check,
    index,
    checkHandler,
}: propsType) {
    return (
        <button
            className={`focus-bg-black  rounded-standard_rounded h-room_register_btn_height1 w-full   text-[1.3rem]   ${
                check
                    ? "bg-font_gray border-0 text-white"
                    : "border border-font_gray"
            } `}
            onClick={() => {
                checkHandler(index);
            }}
        >
            {value}
        </button>
    );
}
