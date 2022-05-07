import Image from "next/image";
import { useSwiper } from "swiper/react";

export default function SlideNextButton({ way }: { way: string }) {
    const swiper = useSwiper();

    return (
        <>
            {way === "prev" ? (
                <button
                    className="absolute bottom-[50%] left-4 z-10 translate-y-[50%]"
                    onClick={() => swiper.slidePrev()}
                >
                    <Image
                        alt="arrow"
                        className="scale-x-[-1]"
                        src={require("icon/화살표_사진위.svg")}
                    />
                </button>
            ) : (
                <button
                    className="absolute bottom-[50%] right-4 z-10 translate-y-[50%]"
                    onClick={() => swiper.slideNext()}
                >
                    <Image
                        alt="arrow"
                        src={require("icon/화살표_사진위.svg")}
                    />
                </button>
            )}
        </>
    );
}
