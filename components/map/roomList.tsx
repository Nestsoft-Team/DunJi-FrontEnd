import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import RoomType from "./Roomtype";

export default function RoomList() {
    const [upDown, setUpDown] = useState<null | boolean>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className={`flex flex-col justify-center w-full items-center 
                shadow-2xl
            translate-y-map_room_list_height  transition duration-300
                    ${upDown === true && " translate-y-0"}
            `}
        >
            <RoomType upDown={upDown} setUpDown={setUpDown} />
            <div className="h-map_room_list_height bg-white">
                <div className="flex my-8">
                    <div className=" z-10 text-yellow text-5xl flex items-center justify-center w-[10%]">
                        <FontAwesomeIcon icon="chevron-left" />
                    </div>
                    <section className="grid grid-cols-2  w-[80%] gap-10">
                        <div className="flex justify-center">
                            <div>
                                <div className="mb-4 text-orange">
                                    오피스텔, 복층형 원룸
                                </div>
                                <div className="">
                                    <Image
                                        src={
                                            require("../../image/map/room.jpeg")
                                                .default
                                        }
                                        alt="room picture"
                                    ></Image>
                                </div>
                                <h2 className="text-2xl my-2">월세 500/40</h2>
                                <p>
                                    <span>62m2</span>
                                    <span>저층/11층</span>
                                </p>
                                <p>
                                    <span>안산시 상록구 이동</span>
                                </p>
                                <p>
                                    <span className="text-orange">
                                        역세권 남향 오피스텔
                                    </span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className=" z-10 text-yellow text-5xl flex items-center justify-center w-[10%] ">
                        <FontAwesomeIcon icon="chevron-right" />
                    </div>
                </div>
            </div>
        </div>
    );
}
