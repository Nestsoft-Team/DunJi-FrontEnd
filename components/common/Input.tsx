type propsType = {
    value: any;
    placeHolder: string;
    setValue: Function;
    unit: string;
};

export default function CommonInput({
    value,
    placeHolder,
    setValue,
    unit,
}: propsType) {
    return (
        <div className="relative h-room_register_btn_height1 mb-4 w-full">
            <input
                type="number"
                className="bg-transparent border border-font_gray w-full rounded-room_register_rounded h-full text-xl pl-4 placeholder-font_gray outline-0"
                placeholder={placeHolder}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></input>
            <div
                className="absolute  text-xl
            right-8 bottom-[50%] translate-y-[50%]"
            >
                {unit}
            </div>
        </div>
    );
}
