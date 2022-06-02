type propsType = {
    content: string;
    checkHandler: () => void;
    check: 0 | 1;
    converse: boolean;
};

export default function InputSelectBox({
    content,
    check,
    checkHandler,
    converse = false,
}: propsType) {
    return (
        <div className="flex justify-end gap-2 items-center text-xl">
            <label
                htmlFor="noFee"
                className={`inline-block before:content-[''] w-[1.6rem] h-[1.6rem] border  border-black mr-2  algin-middle  rounded-[0.3rem] text-center  ${
                    (converse ? check === 0 : check === 1) &&
                    "before:content-['✔️']  bg-font_gray border-0"
                }`}
                onClick={() => {
                    checkHandler();
                }}
            />
            <input type="checkbox" id="noFee" className="hidden" />
            <span>{content}</span>
        </div>
    );
}
