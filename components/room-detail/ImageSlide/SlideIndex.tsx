import { useSwiper } from "swiper/react";

export default function SlideNextButton({ index }: { index: number }) {
    const swiper = useSwiper();

    return (
        <div className="text-white bg-[#0000004D] w-16 flex items-center justify-center h-6 rounded-[10rem] absolute bottom-5 right-5 z-10 ">
            {index}/11
        </div>
    );
}
