import { useEffect, useState } from "react";
import Popup from "./Popup";
import RoomListHeader from "./RoomListHeader";
import RoomListSlider from "./RoomListSlider";
import RoomListYSlider from "./RoomListYSlider";

type propsType = {
    openPopup: boolean;
};
export default function RoomList({ openPopup }: propsType) {
    const [upDown, setUpDown] = useState(0); // 컴포넌트 올라온 단계(0: 지도 하단 가림, 1: 지도 절반 가림 2: 지도 가림)
    const [touchY, setTouchY] = useState(10000);
    const [margin, setMargin] = useState({
        marginTop: "calc(100vh - 15.5rem)",
    });
    const [innerHeight, setInnerHeight] = useState(0);

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
            {upDown === 0 && openPopup && touchY === 0 && <Popup />}
            <RoomListHeader
                setUpDown={setUpDown}
                touchY={touchY}
                setTouchY={setTouchY}
                setMargin={setMargin}
                innerHeight={innerHeight}
            />
            <RoomListSlider />
            <RoomListYSlider />
        </div>
    );
}
