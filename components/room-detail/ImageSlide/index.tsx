import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperBtn from "./SwiperBtn";
import SlideIndex from "./SlideIndex";
import { useState } from "react";

SwiperCore.use([Navigation]);

export default function ImageSlide() {
    const slides = ["./room.png", "./room.png", "./room.png", "./room.png"];
    const [slideIndex, setSlideIndex] = useState(0);
    return (
        <Swiper
            className="relative"
            spaceBetween={10}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            rewind={true}
            breakpoints={{
                500: {
                    slidesPerView: 2,
                },
            }}
            onSlideChange={(e) => setSlideIndex(e.realIndex)}
        >
            <SwiperBtn way="prev" />
            {slides.map((item, index) => (
                <SwiperSlide key={index} virtualIndex={index}>
                    <Image src={require("./room.png")} alt="room"></Image>
                </SwiperSlide>
            ))}
            <SlideIndex index={slideIndex} />
            <SwiperBtn way="next" />
        </Swiper>
    );
}
