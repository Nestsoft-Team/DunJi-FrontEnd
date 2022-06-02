type propsType = {
    value: string;
    check: number;
    index: number;
    checkHandler: (index: number, val: 0 | 1) => void;
    blockCheck: 0 | 1;
};

export default function DuplicateSelectBtn({
    value,
    check,
    index,
    checkHandler,
    blockCheck = 1,
}: propsType) {
    return (
        <button
            className={`focus-bg-black  rounded-standard_rounded h-room_register_btn_height1 w-full   text-[1.3rem]   ${
                check === 1
                    ? "bg-font_gray border-0 text-white"
                    : "border border-font_gray"
            } `}
            onClick={() => {
                checkHandler(index, blockCheck);
            }}
        >
            {value}
        </button>
    );
}
