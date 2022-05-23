import { useSelector } from "react-redux";
import { RootState } from "store";

import SubHeader from "../SubHeader";
import MainImage from "./MainImage";
import RoomImage from "./RoomImage";
import EtcRoomImage from "./EtcRoomImage";

export default function PhotoRegister() {
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    return (
        <>
            {roomRegister.COMPONENT_HANDLER === 3 && (
                <div className="h-full">
                    <SubHeader />
                    <div className="px-standard_pd w-screen">
                        <MainImage />
                        <RoomImage />
                        <EtcRoomImage />
                    </div>
                </div>
            )}
        </>
    );
}
