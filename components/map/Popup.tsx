import Image from "next/image";

export default function Popup() {
    return (
        <div className="absolute bottom-[10vh] w-[94vw] h-[15vh] rounded-standard_rounded border border-font_gray bg-white grid grid-cols-[3fr_4fr] mb-6 z-10">
            <div className="overflow-hidden">
                <Image src={require("./room.png")} alt="room"></Image>
            </div>
            <div className="flex flex-col justify-between p-4">
                <div className="text-[1.5rem] font-[700]">월세 300 / 30</div>
                <div className="text-[1.1rem]">
                    흥부하우스 B동 / 상록구 사동
                </div>
                <div className="text-[1.3rem] text-font_gray">
                    분리형 원룸, 2층
                </div>
                <div className="text-[1.3rem] text-font_gray">25m2 / 7평</div>
            </div>
        </div>
    );
}
