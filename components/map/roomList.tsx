import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export default function RoomList() {
    const [roomFocus, setRoomFoucus] = useState<number>(1);
    function roomFocusHandler(num: number) {
        setRoomFoucus(num);
    }
    const [upDown, setUpDown] = useState<boolean>(false);
    const unDownHandler = () => {
        setUpDown(!upDown);
    };
    return (
        <div className=" z-10 flex flex-col justify-center w-full items-center ">
            <div
                onClick={unDownHandler}
                className={`
                 h-18 bg-white  flex justify-center px-10 pt-2 z-20 w-40 rounded-t-[3rem] 
                 ${upDown ? "hidden" : null}`} //하단에서 올라오는 애니메이션 적용을 위해 hidden 이후 아래에 같은 컴포넌트 추가
            >
                <div className={` ${upDown ? "scale-y-[-1]" : null}`}>
                    <Image
                        src={require("../../image/map/updown.jpg")}
                        alt="updown"
                        width={30}
                        height={30}
                    ></Image>
                </div>
            </div>
            {upDown ? (
                <div className="h-full animate-room-list-up bg-white shadow-thick">
                    <div //upDownHandler 가 적용된 화살표 컴포넌트
                        onClick={unDownHandler}
                        className={`
                 h-16 bg-white  absolute right-[50%] translate-x-1/2 top-[-4rem] flex justify-center px-10 pt-2 z-20 w-40 rounded-t-[3rem] 
      `}
                    >
                        <div className="scale-y-[-1]">
                            <Image
                                src={require("../../image/map/updown.jpg")}
                                alt="updown"
                                width={30}
                                height={30}
                            ></Image>
                        </div>
                    </div>
                    <nav className="grid grid-cols-3 gap-8  items-center  border-b-2 border-yellow text-2xl mb-2 px-4">
                        <div
                            onClick={() => roomFocusHandler(1)}
                            className={`${
                                roomFocus === 1 ? "bg-[#E4E5E5]" : null
                            } rounded-2xl h-16 my-2 w-full flex items-center justify-center`}
                        >
                            전체 방
                        </div>
                        <div
                            onClick={() => roomFocusHandler(2)}
                            className={`${
                                roomFocus === 2 ? "bg-[#E4E5E5]" : null
                            } rounded-2xl h-16 my-2 w-full flex items-center justify-center`}
                        >
                            중개사무소
                        </div>
                        <div
                            onClick={() => roomFocusHandler(3)}
                            className={`${
                                roomFocus === 3 ? "bg-[#E4E5E5]" : null
                            } rounded-2xl h-16 my-2 w-full flex items-center justify-center`}
                        >
                            개인
                        </div>
                    </nav>
                    <div className="flex my-8">
                        <div className=" z-10 text-yellow text-5xl flex items-center justify-center w-[10%]">
                            <FontAwesomeIcon icon="chevron-left" />
                        </div>
                        <section className="grid grid-cols-2  w-[80%] gap-10">
                            <div className="flex justify-center">
                                <div>
                                    <div className="mb-4">
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
                                    <h2 className="text-2xl my-2">
                                        월세 500/40
                                    </h2>
                                    <p>
                                        <span>62m2</span>
                                        <span>저층/11층</span>
                                    </p>
                                    <p>
                                        <span>안산시 상록구 이동</span>
                                    </p>
                                    <p>
                                        <span className="text-[rgba(0,0,0,0.5)]">
                                            역세권 남향 오피스텔
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div>
                                    <div className="mb-4">
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
                                    <h2 className="text-2xl my-2">
                                        월세 500/40
                                    </h2>
                                    <p>
                                        <span>62m2</span>
                                        <span>저층/11층</span>
                                    </p>
                                    <p>
                                        <span>안산시 상록구 이동</span>
                                    </p>
                                    <p>
                                        <span className="text-[rgba(0,0,0,0.5)]">
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
            ) : null}
        </div>
    );
}
