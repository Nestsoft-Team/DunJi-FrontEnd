import Image from "next/image";
import { useState } from "react";
import Popup from "./Popup";
import RoomType from "./Roomtype";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";

type propsType = {
    openPopup: boolean;
};
export default function RoomList({ openPopup }: propsType) {
    const [upDown, setUpDown] = useState<null | boolean>(null);
    const slides = ["./room.png", "./room.png", "./room.png", "./room.png"];

    return (
        <div
            className={`flex flex-col justify-center w-full items-center transition   z-10    ${
                upDown && " translate-y-0"
            } translate-y-map_room_list_height
            `}
        >
            {!upDown && openPopup && <Popup />}
            <RoomType upDown={upDown} setUpDown={setUpDown} />
            <div className="h-map_room_list_height bg-white w-full pl-[3vw] py-2">
                <div className="flex-col  w-full">
                    <div className="flex  items-center text-[1.5rem] mb-2">
                        <Image
                            src={require("icon/방.svg")}
                            width={25}
                            height={25}
                            alt="room"
                        />
                        이 구역 인기 방 먼저 둘러보세요!
                    </div>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2.5}
                        breakpoints={{
                            600: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {slides.map((item, index) => (
                            <SwiperSlide key={index} virtualIndex={index}>
                                <Image src={require("./room.png")} alt="room" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
