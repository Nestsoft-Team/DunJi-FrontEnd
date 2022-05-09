export default function Title() {
    return (
        <div className="my-4">
            <div className="h-10 flex justify-between items-center mb-4">
                <div className="flex h-full items-center">
                    <div className="text-[1.2rem] h-full flex items-center px-2 text-white bg-font_gray rounded-standard_rounded mr-4">
                        거래 완료
                    </div>
                    <div className="text-[1.5rem]">흥부하우스 B동</div>
                </div>
                <div className=" float-right flex h-full  text-[1.1rem] text-font_gray items-center">
                    등록일 : 2022.01.01
                </div>
            </div>
            <span className="text-[2rem] font-black">월세 30 / 300</span>
        </div>
    );
}
