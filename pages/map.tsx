import { useState, useEffect, useRef } from "react";
import React from "react";
import Nav from "components/Map/Nav";
import RoomList from "components/Map/RoomList";
import Header from "components/Map/Header";

export default function Map() {
    const [latitude, setLatitude] = useState(37.297526827747966); //한양대 에리카 위도,경도
    const [longitude, setLongitude] = useState(126.835628984629);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputContainerRef = useRef<HTMLInputElement>(null);

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
        //지도 클릭 시 input Box 그림자 제거
        inputRef.current && inputRef.current.blur();
        inputContainerRef.current &&
            inputContainerRef.current.classList.remove("shadow-xl");
    }
    return (
        <div className="w-full h-full flex flex-col">
            <Header inputRef={inputRef} inputContainerRef={inputContainerRef} />
            <div className="flex flex-col  fixed bottom-0 z-10 items-center">
                <RoomList />
                <Nav />
            </div>
            <div
                id="map"
                onClick={inputBlurHandler}
                className=" w-screen h-[80vh]"
            ></div>
        </div>
    );
}
