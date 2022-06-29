type propsType = {
    title: string;
    price: number;
    deposit: number;
    priceUnit: string;
};
export default function Title({ title, price, deposit, priceUnit }: propsType) {
    return (
        <div className="my-4">
            <div className="flex  items-center mb-4">
                <div className="flex items-center">
                    <div className="text-[1rem] h-10 flex items-center px-2 text-white bg-font_gray rounded-standard_rounded mr-4 ">
                        거래 완료
                    </div>
                    <div className="text-[1.5rem] h-full">{title}</div>
                </div>
                {/* <div className=" float-right flex h-full  text-[1.1rem] text-font_gray items-center">
                    등록일 : 2022.01.01
                </div> */}
            </div>
            <span className="text-[2rem] font-black">
                {priceUnit}세 {price} / {deposit}
            </span>
        </div>
    );
}
