import { useState, useEffect } from "react";
import React from "react";
import RoomList from "components/map/RoomList";
import Header from "components/map/Header";

export default function Map() {
    const [latitude, setLatitude] = useState(37.297526827747966); //한양대 에리카 위도,경도
    const [longitude, setLongitude] = useState(126.835628984629);
    const [openPopup, setOpenPopup] = useState(false);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    function (error) {
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
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`;
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude),
                    level: 6,
                };
                const map = new window.kakao.maps.Map(container, options);

                function overlayClickHandler() {
                    // router.replace("/room/1");
                    setOpenPopup(!openPopup);
                }

                const content = document.createElement("div");
                content.innerText = "   14만 / 주";
                content.onclick = overlayClickHandler;
                content.style.fontSize = "1.3rem";
                content.style.backgroundColor = "#3F3C3A";
                content.style.color = "#F9F9F9";
                content.style.padding = "0.5rem 1.5rem";
                content.style.borderRadius = "1.2rem";
                content.style.opacity = "0.6";

                const position = new window.kakao.maps.LatLng(
                    latitude,
                    longitude
                );

                const customOverlay = new window.kakao.maps.CustomOverlay({
                    position: position,
                    content: content,
                });

                var clusterer = new kakao.maps.MarkerClusterer({
                    map: map,
                    averageCenter: true,
                    minLevel: 7,
                    minClusterSize: 1,
                    styles: [
                        {
                            color: "#F9F9F9",
                            background: "#3F3C3A",
                            width: "3rem",
                            height: "3rem",
                            "border-radius": "100%",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center",
                        },
                    ],
                });

                customOverlay.setMap(map);
                clusterer.setMap(map);
                clusterer.addMarkers([customOverlay]);
                window.kakao.maps.event.addListener(map, "dragend", () => {
                    console.log(map.getBounds());
                }); // 드래그 이동 시 좌표 출력
                window.kakao.maps.event.addListener(map, "zoom_changed", () => {
                    console.log(map.getBounds());
                }); // 줌 변경 시 좌표 출력
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);
        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, [latitude, longitude, openPopup]);

    return (
        <>
            <div className="flex flex-col w-screen  h-screen relative overflow-hidden">
                <Header />
                <RoomList openPopup={openPopup} />
                <div
                    className="absolute top-0 w-screen h-screen"
                    id="map"
                ></div>
            </div>
        </>
    );
}
