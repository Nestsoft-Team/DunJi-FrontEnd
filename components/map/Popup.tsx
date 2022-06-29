import Image from "next/image";
import round from "hooks/useRoomSizeConvert";
type propsType = {
    data: any;
};
export default function Popup({ data }: propsType) {
    const roomDetail = data && data.data.Room_Data;

    return (
        <div className="absolute bottom-[10vh] w-[94vw] ml-[3vw] rounded-standard_rounded border border-font_gray bg-white grid grid-cols-[3fr_4fr] mb-6  ">
            <Image src={require("./room.png")} alt="room"></Image>
            <div className="flex flex-col justify-between p-2">
                {roomDetail && (
                    <>
                        <div className="text-[1.5rem] font-[700]">
                            {roomDetail.priceUnit} {roomDetail.deposit} /{" "}
                            {roomDetail.price}
                        </div>
                        <div className="text-[1.1rem]">
                            {roomDetail.address} / {roomDetail.detailAddress}
                        </div>
                        <div className="text-[1.3rem] text-font_gray">
                            {roomDetail.struct}, {roomDetail.floor}층
                        </div>
                        <div className="text-[1.3rem] text-font_gray">
                            {roomDetail.roomSize}m<sup>2</sup> /{" "}
                            {round(roomDetail.roomSize)}평
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
