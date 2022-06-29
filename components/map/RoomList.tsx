import useRoomRedux from "hooks/useRoomRedux";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { mapApi } from "_api";
import Popup from "./Popup";
import RoomListHeader from "./RoomListHeader";
import RoomListSlider from "./RoomListSlider";
import RoomListYSlider from "./RoomListYSlider";

type propsType = {
    openPopup: boolean;
    focusRoomId: string;
};
export default function RoomList({ openPopup, focusRoomId }: propsType) {
    const [upDown, setUpDown] = useState(0); // 컴포넌트 올라온 단계(0: 지도 하단 가림, 1: 지도 절반 가림 2: 지도 가림)
    const [touchY, setTouchY] = useState(10000); // n개의 방 컴포넌트 터치 이벤트에서 얻은 y 값
    const [margin, setMargin] = useState({
        marginTop: "calc(100vh - 15.5rem)",
    });
    const [innerHeight, setInnerHeight] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0); // 화면 전체 y값
    const [state, dispatch] = useRoomRedux();

    const { status, data, error } = useQuery(
        ["getRoomDetailData", focusRoomId],
        () => mapApi.getRoomDetail(focusRoomId),
        {
            enabled: focusRoomId !== "",
        }
    );
    useEffect(() => {
        const handleResize = () => {
            setInnerHeight(window.innerHeight);
        };
        handleResize();
        window.addEventListener("resize", () => handleResize);

        setMargin({ marginTop: `calc(${innerHeight}px - 15.5rem)` });
        return () => window.removeEventListener("resize", handleResize);
    }, [innerHeight]);

    return (
        <div className="w-full  z-10" style={margin}>
            {upDown === 0 && openPopup && touchY === windowHeight && (
                <Popup data={data} />
            )}
            <RoomListHeader
                setUpDown={setUpDown}
                touchY={touchY}
                setTouchY={setTouchY}
                setMargin={setMargin}
                innerHeight={innerHeight}
                windowHeight={windowHeight}
                setWindowHeight={setWindowHeight}
            />
            <RoomListSlider />
            <RoomListYSlider />
        </div>
    );
}
