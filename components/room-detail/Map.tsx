import React, { useEffect } from "react";
import Script from "next/script";
type propsType = {
    latitude: number;
    longitude: number;
};

export default function Map({ latitude, longitude }: propsType) {
    // useEffect(() => {
    //     const mapScript = document.createElement("script");
    //     mapScript.async = true;
    //     mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    //     document.head.appendChild(mapScript);
    //     const onLoadKakaoMap = () => {
    //         window.kakao.maps.load(() => {
    //             const container = document.getElementById("map");
    //             const options = {
    //                 center: new window.kakao.maps.LatLng(latitude, longitude),
    //                 level: 6,
    //             };
    //             const map = new window.kakao.maps.Map(container, options);
    //             const markerPosition = new window.kakao.maps.LatLng(
    //                 latitude,
    //                 longitude
    //             );
    //             const marker = new window.kakao.maps.Marker({
    //                 position: markerPosition,
    //             });
    //             marker.setMap(map);
    //         });
    //     };
    //     mapScript.addEventListener("load", onLoadKakaoMap);
    //     return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    // }, [latitude, longitude]);
    const onLoadKakaoMap = () => {
        window.kakao.maps.load(() => {
            const container = document.getElementById("map");
            const options = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 6,
            };
            new window.kakao.maps.Map(container, options);
        });
    };

    return (
        <>
            <Script
                onLoad={onLoadKakaoMap}
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
            />
            <div id="map" className="w-full h-[25vh]" />;
        </>
    );
}
