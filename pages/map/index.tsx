import { useState, useEffect, useRef, useCallback } from "react";
import React from "react";
import RoomList from "components/map/RoomList";
import Header from "components/map/Header";
import Script from "next/script";
import { useQuery } from "react-query";
import { mapApi } from "_api";
import useRoomRedux from "hooks/useRoomRedux";
import { dispatchRoomList, dispatchMapRoomList } from "store/modules/room";

export default function Map() {
    const [state, dispatch] = useRoomRedux();
    const [load, setLoad] = useState(false); // kakao map script 로드 여부
    const [latitude, setLatitude] = useState(37.297526827747966); //한양대 에리카 위도,경도
    const [longitude, setLongitude] = useState(126.835628984629);
    const [openPopup, setOpenPopup] = useState(false);
    const [focusRoomId, setFocusRoomId] = useState("");
    const [coordinate, setCoordinate] = useState([
        126.81869842862838, 37.27339683024221, 126.8524293384371,
        37.321522977544404,
    ]);
    let mapVar = useRef();

    // useEffect(() => { // 현재 위도, 경도 얻는 훅
    //     const getLocation = () => {
    //         if (navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(
    //                 function (position) {
    //                     setLatitude(position.coords.latitude);
    //                     setLongitude(position.coords.longitude);
    //                 },
    //                 function (error) {
    //                     console.log(error);
    //                 },
    //                 {
    //                     enableHighAccuracy: false,
    //                     maximumAge: 300000,
    //                     timeout: 30000,
    //                 }
    //             );
    //         } else {
    //             alert("GPS를 지원하지 않습니다");
    //             return;
    //         }
    //     };

    //     getLocation();
    // }, []);

    const { status, data, error } = useQuery(
        ["getRoomData", coordinate],
        () => mapApi.getRoom(coordinate),
        {
            onSuccess: (data) => {
                dispatch(dispatchMapRoomList(data)); // 지도 상에 보이는 매물 리덕스로 관리
                window.kakao.maps.load(() => {
                    addOverlay(mapVar.current, data);
                });
            },
        }
    );

    const updateCoordinate = useCallback(
        (qa: number, ha: number, pa: number, oa: number) => {
            setCoordinate(() => [qa, ha, pa, oa]);
        },
        []
    );

    const addOverlay = useCallback(
        (map: any, response: any) => {
            const data = response.data;
            const clusterer = new window.kakao.maps.MarkerClusterer({
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
            const existData = state.ROOM_LIST;
            const newData = [];
            for (let item of data) {
                if (!existData.hasOwnProperty(item.roomID)) {
                    newData.push(item);
                }
            }
            dispatch(dispatchRoomList(newData));
            for (let item of newData) {
                const content = document.createElement("div");
                content.innerText = `${item.deposit}만 / ${item.priceUnit}`;
                content.addEventListener("click", () => {
                    setOpenPopup(!openPopup);
                    setFocusRoomId(item.roomID);
                });
                content.style.fontSize = "1.3rem"; // 커스텀 오버레이(10만 / 월)
                content.style.fontWeight = "600";
                content.style.backgroundColor = "#F9F9F9";
                content.style.color = "#3F3C3A";
                content.style.padding = "0.3rem 1.1rem";
                content.style.border = "0.1rem solid #A9A7A2";
                content.style.borderRadius = "1.2rem";
                const position = new window.kakao.maps.LatLng(
                    item.latitude,
                    item.longitude
                );
                const customOverlay = new window.kakao.maps.CustomOverlay({
                    position: position,
                    content: content,
                });
                customOverlay.setMap(map);

                clusterer.setMap(map);
                clusterer.addMarkers([customOverlay]);
            }
        },
        [dispatch, openPopup, state.ROOM_LIST]
    );

    const onLoadKakaoMap = useCallback(() => {
        window.kakao.maps.load(() => {
            setLoad(true);
            const container = document.getElementById("map");
            const options = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 6,
            };
            const map = new window.kakao.maps.Map(container, options);
            mapVar.current = map;

            window.kakao.maps.event.addListener(map, "dragend", () => {
                const { ha, qa, oa, pa } = map.getBounds();
                setOpenPopup(false);
                updateCoordinate(ha, qa, oa, pa);
            }); // 드래그 이벤트 처리
            window.kakao.maps.event.addListener(map, "dragstart", () => {
                setOpenPopup(false);
            }); // 드래그 이벤트 처리
            window.kakao.maps.event.addListener(map, "zoom_changed", () => {
                const { ha, qa, oa, pa } = map.getBounds();
                setOpenPopup(false);
                updateCoordinate(ha, qa, oa, pa);
            }); // 줌 이벤트 처리
            var moveLatLon = new window.kakao.maps.LatLng(latitude, longitude);
            map.panTo(moveLatLon);
        });
    }, [latitude, longitude, updateCoordinate]);

    useEffect(() => {
        // header에서 주소 주소 검색한 경우 현재 지도 중심 위치 변경 훅
        if (load) {
            // kakao map api 로드 이후에 동작하게 함
            var moveLatLon = new window.kakao.maps.LatLng(latitude, longitude);
            mapVar.current.panTo(moveLatLon);
        }
    }, [latitude, load, longitude]);
    return (
        <>
            <Script
                onLoad={onLoadKakaoMap}
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
            />
            <div className="flex flex-col w-screen  h-screen relative overflow-hidden">
                <Header setLatitude={setLatitude} setLongitude={setLongitude} />
                <RoomList openPopup={openPopup} focusRoomId={focusRoomId} />
                <div className="absolute top-0 w-screen h-screen" id="map" />
            </div>
        </>
    );
}
