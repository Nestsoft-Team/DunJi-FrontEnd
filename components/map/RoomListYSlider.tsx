import Image from "next/image";

export default function RoomListYSlider() {
    const slides = ["./room.png", "./room.png", "./room.png", "./room.png"];

    return (
        <div className="w-screen bg-white  px-standard_pd h-70vh overflow-scroll">
            {slides.map((item, index) => (
                <div key={index} className="border-b pt-6">
                    <Image
                        src={require("./room.png")}
                        alt="room"
                        className="rounded-[1.5rem]"
                        width={400}
                        height={180}
                    />
                    <div className="flex justify-between items-center mt-2">
                        <div>흥부하우스 B동 / 상록구 사동</div>
                        <div className="text-font_gray">분리형 원룸, 2층</div>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                        <div className="font-[700] text-[1.5rem] ">
                            월세 300 / 30
                        </div>
                        <div className="text-font_gray ">25m2 / 7평</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
