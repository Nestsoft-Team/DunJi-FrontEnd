import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { RefObject, useEffect, useState } from "react";
import CommonBtn from "./CommonBtn";

type propsType = {
    inputRef: RefObject<HTMLInputElement>;
    inputContainerRef: RefObject<HTMLInputElement>;
};
export default function Header({ inputRef, inputContainerRef }: propsType) {
    const [searchVal, setSearchVal] = useState("");
    const [filterSelect1, setFilterSelect1] = useState({
        value: "원룸,오피스텔",
        check: false,
    });
    const [filterSelect2, setFilterSelect2] = useState({
        value: "월세",
        check: false,
    });
    const [filterSelect3, setFilterSelect3] = useState({
        value: "방 크기",
        check: false,
    });
    const [filterSelect4, setFilterSelect4] = useState({
        value: "관리비",
        check: false,
    });

    function inputShadowHandler() {
        // input Box 클릭 시 그림자 추가
        inputContainerRef.current &&
            inputContainerRef.current.classList.add("shadow-xl");
    }

    return (
        <header className=" w-full px-room_register_pd pt-6 z-10 bg-component_beige">
            <div className="text-2xl h-[3.5rem] flex items-center justify-between">
                <Link href="/">
                    <a>
                        <FontAwesomeIcon icon="chevron-left" />
                    </a>
                </Link>
                <div className="relative h-[3.5rem] w-[90%]">
                    <input
                        type="text"
                        className="bg-white  rounded-[10rem] h-full text-xl pl-8 placeholder-font_gray outline-0 w-full"
                        placeholder="지역 검색"
                        value={searchVal}
                        onChange={(e) => {
                            setSearchVal(e.target.value);
                        }}
                    ></input>
                    {searchVal && (
                        <div
                            onClick={() => setSearchVal("")}
                            className="absolute  
                        right-6 bottom-[50%] translate-y-[50%] bg-border_color rounded-[10rem] text-white
                        // w-[1.4rem] h-[1.4rem] flex items-center justify-center text-base"
                        >
                            <FontAwesomeIcon icon="x"></FontAwesomeIcon>
                        </div>
                    )}
                </div>
            </div>
            <div className="h-[2.5rem] flex gap-2 my-8">
                <FontAwesomeIcon icon="filter"></FontAwesomeIcon>
                <CommonBtn
                    check={filterSelect1.check}
                    value={filterSelect1.value}
                    checkHandler={setFilterSelect1}
                />
                <CommonBtn
                    check={filterSelect2.check}
                    value={filterSelect2.value}
                    checkHandler={setFilterSelect2}
                />
                <CommonBtn
                    check={filterSelect3.check}
                    value={filterSelect3.value}
                    checkHandler={setFilterSelect3}
                />
                <CommonBtn
                    check={filterSelect4.check}
                    value={filterSelect4.value}
                    checkHandler={setFilterSelect4}
                />
            </div>
        </header>
    );
}
