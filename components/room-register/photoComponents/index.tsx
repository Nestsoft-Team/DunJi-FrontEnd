import SubHeader from "../SubHeader";
import MainImage from "./MainImage";
import RoomImage from "./RoomImage";
export default function PhotoRegister() {
    return (
        <div className="h-full">
            <div className="w-screen h-4  bg-room_register_bg border-t border-border_color"></div>
            <SubHeader title="3. 사진등록" />
            <div className="px-room_register_pd w-screen">
                <MainImage />
                <RoomImage />
            </div>
        </div>
    );
}
