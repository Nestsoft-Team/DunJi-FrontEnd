type propsType = {
    value: String;
    check: Boolean;
    checkHandler: Function;
};

export default function CommonBtn({ value, check, checkHandler }: propsType) {
    return (
        <button
            className={`focus-bg-black  rounded-room_register_rounded h-full w-full border border-border_color text-xl  ${
                check
                    ? "bg-orange border-0 text-white"
                    : "  bg-white text-border_color"
            } `}
            onClick={() => {
                checkHandler(!check);
            }}
        >
            {value}
        </button>
    );
}
