import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Nav from "../components/map/nav";

declare global {
    interface Window {
        kakao: any;
    }
}

export default function Map() {
    const [latitude, setLatitude] = useState(37.297526827747966);
    const [longitude, setLongitude] = useState(126.835628984629);

    const inputRef = useRef<HTMLInputElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    function (error) {
                        // alert("브라우저 설정에서 위치 접근을 허용해 주세요");
                        console.log(error);
                    },
                    {
                        enableHighAccuracy: false,
                        maximumAge: 300000,
                        timeout: 30000,
                    }
                );
            } else {
                alert("GPS를 지원하지 않습니다");
                return;
            }
        };

        getLocation();
    }, []);

    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
        document.head.appendChild(mapScript);
        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude),
                    level: 6,
                };
                const map = new window.kakao.maps.Map(container, options);
                const markerPosition = new window.kakao.maps.LatLng(
                    latitude,
                    longitude
                );
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });
                marker.setMap(map);
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);
        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, [latitude, longitude]);

    function inputBlurHandler() {
        inputRef.current ? inputRef.current.blur() : null;
        inputContainerRef.current
            ? inputContainerRef.current.classList.remove("shadow-xl")
            : null;
    }

    function inputShadowHandler() {
        inputContainerRef.current
            ? inputContainerRef.current.classList.add("shadow-xl")
            : null;
    }

    return (
        <div className="w-full h-full flex flex-col">
            <div className="absolute z-10 text-dark_yellow text-5xl top-12 left-5">
                <Link href="/">
                    <a>
                        <FontAwesomeIcon icon="chevron-left" />
                    </a>
                </Link>
            </div>
            <div
                ref={inputContainerRef}
                className="absolute z-10 bg-white top-32 right-1/2 translate-x-1/2  flex items-center h-20 w-4/5 border  rounded-3xl shadow-thick"
            >
                <div className=" ml-4  flex items-center">
                    <Image
                        src={require("../image/map/search.png")}
                        alt="search"
                        width={40}
                        height={40}
                    ></Image>
                </div>
                <input
                    onFocus={inputShadowHandler}
                    ref={inputRef}
                    className="ml-4 w-full h-full border-none outline-none bg-transparent text-xl "
                ></input>
                <div className=" mr-6 flex items-center">
                    <Image
                        src={require("../image/map/filter_yellow.png")}
                        alt="filter"
                        width={40}
                        height={40}
                    ></Image>
                </div>
            </div>
            <Nav />
            <div
                id="map"
                onClick={inputBlurHandler}
                className="w-screen h-screen"
            ></div>
        </div>
    );
}
