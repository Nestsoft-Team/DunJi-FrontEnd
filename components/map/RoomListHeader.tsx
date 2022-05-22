import Image from "next/image";
import {
    Dispatch,
    SetStateAction,
    TouchEvent,
    useEffect,
    useState,
} from "react";
import { map_room_list_header_height, map_header_height } from "./Variable";

type propsType = {
    setUpDown: Dispatch<SetStateAction<number>>;
    touchY: number;
    setTouchY: Dispatch<SetStateAction<number>>;
    setMargin: Dispatch<
        SetStateAction<{
            marginTop: string;
        }>
    >;
    innerHeight: number;
};

export default function RoomListHeader({
    setUpDown,
    touchY,
    setTouchY,
    setMargin,
    innerHeight,
}: propsType) {
    const [windowHeight, setWindowHeight] = useState(0); // 화면 전체 y값

    // resize 이벤트 발생 시 화면 y값 변경
    useEffect(() => {
        setWindowHeight(window.innerHeight);
        const getInnerHeight = () => {
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", getInnerHeight);
        return () => window.removeEventListener("resize", getInnerHeight);
    }, []);

    //드래그시 margin 설정
    const touchHandler = (e: TouchEvent<HTMLDivElement>) => {
        let clientY = Math.round(e.touches[0].clientY);
        // Header 의 높이 9.5rem 보다 마우스가 위로 가는 경우
        if (clientY < 95) clientY = 95;
        else if (clientY > windowHeight - 60) clientY = windowHeight - 60;
        setTouchY(clientY);
        setMargin({
            marginTop: `calc(${clientY}px - ${map_header_height})`,
        }); // touchY(화면 최상단에서 마우스까지의 위치)에서 Header의 높이 11rem을 제외한 margin: ;
    };

    //드래그 종료 시 margin값 변경, upDown 변수 값 변경
    const touchEndHandler = () => {
        if (touchY >= windowHeight * 0.65) {
            setUpDown(0);
            setMargin({
                marginTop: `calc(${innerHeight}px - 15.5rem)`,
            }); // 컴포넌트가 화면 하단만 가린 상태. 15.5rem(Header높이(9.5rem) + 하단 n개방 컴포넌트 헤더(6rem))을 제외한 margin
        } else if (
            windowHeight * 0.35 < touchY &&
            touchY < windowHeight * 0.65
        ) {
            setUpDown(1);
            setMargin({ marginTop: `calc(${innerHeight}px - 39.5rem)` }); //지도를 절반 가린 상태
        } else if (touchY <= windowHeight * 0.35) {
            setUpDown(2);
            setMargin({ marginTop: "0" }); // 지도를 다 가린 상태
        }
    };

    return (
        <div
            className={`w-screen   bg-white flex flex-col items-center
             border-b border-1 h-[6rem] `}
            onTouchMove={touchHandler}
            onTouchEnd={touchEndHandler}
        >
            <div className="w-16 h-2 bg-border_color rounded-[2rem] my-2" />
            <div className="text-[1.5rem] flex items-center mt-2">
                <Image
                    src={require("assets/icon/방.svg")}
                    width={25}
                    height={25}
                    alt="room"
                />
                33개의 방
            </div>
        </div>
    );
}
