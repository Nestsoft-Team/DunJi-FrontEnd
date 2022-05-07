import Image from "next/image";
import { useRef, useState } from "react";
import RoomType from "./Roomtype";

export default function RoomList() {
    const [upDown, setUpDown] = useState<null | boolean>(null);

    return (
        <div
            className={`flex flex-col justify-center w-screen items-center translate-y-map_room_list_height  transition absolute bottom-0 z-10 ${
                upDown === true && " translate-y-0"
            }
            `}
        >
            <RoomType upDown={upDown} setUpDown={setUpDown} />
            <div className="h-map_room_list_height bg-white w-full">
                <div className="flex my-8 px-4">
                    <div className="flex items-center text-[1.5rem]">
                        <Image
                            src={require("icon/map/방.svg")}
                            width={25}
                            height={25}
                            alt="room"
                        />
                        이 구역 인기 방 먼저 둘러보세요!
                    </div>
                </div>
            </div>
        </div>
    );
}
