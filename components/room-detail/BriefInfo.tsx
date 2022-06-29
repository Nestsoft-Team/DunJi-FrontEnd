import useRoomSizeConvert from "hooks/useRoomSizeConvert";

type propsType = {
    roomSize: number;
    floor: number;
    entireFloor: number;
    struct: string;
};

export default function BriefInfo({
    roomSize,
    floor,
    entireFloor,
    struct,
}: propsType) {
    return (
        <div className="h-16 bg-transparent rounded-standard_rounded grid grid-cols-3 gap-1 overflow-hidden text-[1.4rem]">
            <div className="bg-component_white flex items-center justify-center">
                {roomSize}m<sup>2</sup> / {useRoomSizeConvert(roomSize)}평
            </div>
            <div className="bg-component_white flex items-center justify-center">
                {floor}층 / {entireFloor}층
            </div>
            <div className="bg-component_white flex items-center justify-center">
                {struct}
            </div>
        </div>
    );
}
