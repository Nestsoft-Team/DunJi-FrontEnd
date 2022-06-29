import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import CommonBtn from "./CommonBtn";
import { map_header_height } from "./Variable";

export default function Header({ setLatitude, setLongitude }: any) {
    const [searchVal, setSearchVal] = useState("");
    const [filterSelect1, setFilterSelect1] = useState(false);
    const [filterSelect2, setFilterSelect2] = useState(false);
    const [filterSelect3, setFilterSelect3] = useState(false);
    const [filterSelect4, setFilterSelect4] = useState(false);
    const [filterSelect5, setFilterSelect5] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    const btnArr = [
        {
            check: filterSelect1,
            checkHandler: setFilterSelect1,
            value: "원룸, 오피스텔",
        },
        { check: filterSelect2, checkHandler: setFilterSelect2, value: "월세" },
        {
            check: filterSelect3,
            checkHandler: setFilterSelect3,
            value: "방 크기",
        },
        {
            check: filterSelect4,
            checkHandler: setFilterSelect4,
            value: "관리비",
        },
        {
            check: filterSelect5,
            checkHandler: setFilterSelect5,
            value: "거래가능",
        },
    ];

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);

        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(searchVal, placesSearchCB);

        function placesSearchCB(data: any, status: any, pagination: any) {
            if (status === window.kakao.maps.services.Status.OK) {
                // 검색 성공
                setSearchResult(data);
            } else if (
                // 검색 실패
                status === window.kakao.maps.services.Status.ZERO_RESULT
            ) {
                return;
            } else if (status === window.kakao.maps.services.Status.ERROR) {
                alert("검색 결과 중 오류가 발생했습니다.");
                return;
            }
        }
    };

    const clickHander = (item: any) => {
        setLatitude(item.y);
        setLongitude(item.x);
        setSearchResult([]);
    };

    const searchValClickHandler = () => {
        setSearchVal("");
        setSearchResult([]);
    };

    return (
        <>
            <div
                className={`h-[${map_header_height}] w-screen px-standard_pd pt-6 z-10 bg-background_beige `}
            >
                <div className="text-2xl h-[3.5rem] flex items-center justify-between">
                    <Link href="/">
                        <a>
                            <Image
                                width={22}
                                height={22}
                                alt="arrow"
                                src={require("assets/icon/화살표.svg")}
                            />
                        </a>
                    </Link>
                    <div className="relative h-[3.5rem] w-[90%]">
                        <input
                            type="text"
                            className="bg-white  rounded-[10rem] h-full text-xl pl-8 placeholder-font_gray outline-0 w-full"
                            placeholder="지역 검색"
                            value={searchVal}
                            onChange={(e) => inputHandler(e)}
                        ></input>
                        {searchVal && (
                            <div
                                onClick={searchValClickHandler}
                                className="absolute  right-3 bottom-[0] flex items-center h-full"
                            >
                                <Image
                                    width={22}
                                    height={22}
                                    alt="x"
                                    src={require("assets/icon/검색_X.svg")}
                                ></Image>
                            </div>
                        )}
                    </div>
                </div>
                <div className="h-[2.5rem] flex gap-2 my-4">
                    <Link href="/map/filter">
                        <a>
                            <Image
                                width={22}
                                height={22}
                                alt="필터"
                                src={require("assets/icon/필터.svg")}
                            ></Image>
                        </a>
                    </Link>
                    {btnArr.map((item, index) => (
                        <CommonBtn
                            key={index}
                            check={item.check}
                            value={item.value}
                            checkHandler={item.checkHandler}
                        />
                    ))}
                </div>
            </div>
            {searchResult.length !== 0 && (
                <div
                    className={`top-[6rem] h-[calc(100vh-6rem)] absolute w-screen bg-background_beige z-20  border-t-2 overflow-scroll`}
                >
                    {searchResult.map((item: any) => (
                        <div
                            className="flex flex-col justify-evenly h-24 border-b-2 pl-8"
                            key={Number(item.id)}
                            onClick={() => clickHander(item)}
                        >
                            <div className="text-2xl">
                                {item.place_name.split(searchVal)[0]}
                                <span className="text-main">{searchVal}</span>
                                {item.place_name.split(searchVal)[1]}
                            </div>
                            <div>{item.address_name}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
