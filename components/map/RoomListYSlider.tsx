import useRoomRedux from "hooks/useRoomRedux";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import round from "hooks/useRoomSizeConvert";
import { listTypes } from "store/modules/room";

export default function RoomListYSlider() {
    const [slideData, setSideData] = useState([]);

    const [state] = useRoomRedux();
    useEffect(() => {
        if (Object.keys(state.MAP_ROOM_LIST).length !== 0) {
            setSideData(Object.values(state.MAP_ROOM_LIST));
        }
    }, [state.MAP_ROOM_LIST]);
    return (
        <div className="w-screen bg-white  px-standard_pd h-[42vh] overflow-scroll">
            {slideData.map((item: listTypes, index) => (
                <Link key={index} href={`/room/${item.roomID}`} passHref>
                    <div className="border-b pt-6">
                        <Image
                            src={require("./room.png")}
                            alt="room"
                            className="rounded-[1.5rem]"
                            width={400}
                            height={180}
                        />
                        <div className="flex justify-between items-center mt-2">
                            <div>
                                {item.address} / {item.detailAddress}
                            </div>
                            <div className="text-font_gray">
                                {item.struct} , {item.floor}
                            </div>
                        </div>
                        <div className="flex justify-between items-center pb-4">
                            <div className="font-[700] text-[1.5rem] ">
                                {item.priceUnit} {item.deposit} / {item.price}
                            </div>
                            <div className="text-font_gray ">
                                {item.roomSize}m<sup>2</sup> /{" "}
                                {round(item.roomSize)}평
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
