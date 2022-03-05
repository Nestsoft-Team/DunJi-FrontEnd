type propsType = {
    value: any;
    placeHolder: string;
    setValue: Function;
};

export default function CommonInput({
    value,
    placeHolder,
    setValue,
}: propsType) {
    return (
        <div className="relative h-16 mb-4">
            <input
                type="number"
                className=" border border-border_color w-full rounded-room_register_rounded h-full text-xl pl-4 placeholder-black outline-0 focus:border-orange"
                placeholder={placeHolder}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></input>
            <div
                className="absolute text-border_color text-xl
            right-8 bottom-[50%] translate-y-[50%]"
            >
                만원
            </div>
        </div>
    );
}
