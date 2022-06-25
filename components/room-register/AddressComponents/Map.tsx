import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { useEffect } from "react";
import {
    dispatchLatitude,
    dispatchLongitude,
} from "store/modules/roomRegister";

declare global {
    interface Window {
        kakao: any;
    }
}
export default function Map() {
    const [state, dispatch] = useRoomRegisterRedux();
    const address = state.address;

    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services`;
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");

                var geocoder = new window.kakao.maps.services.Geocoder();
                geocoder.addressSearch(
                    address,
                    function (result: any, status: String) {
                        if (status === window.kakao.maps.services.Status.OK) {
                            const longitude = result[0].x; // 경도
                            const latitude = result[0].y; //위도

                            dispatch(dispatchLongitude(longitude));
                            dispatch(dispatchLatitude(latitude));

                            const options = {
                                center: new window.kakao.maps.LatLng(
                                    latitude,
                                    longitude
                                ),
                                level: 6,
                            };
                            const map = new window.kakao.maps.Map(
                                container,
                                options
                            );

                            const markerPosition = new window.kakao.maps.LatLng(
                                latitude,
                                longitude
                            );
                            const marker = new window.kakao.maps.Marker({
                                position: markerPosition,
                            });
                            marker.setMap(map);
                        }
                    }
                );
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);
        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, []);

    return <div id="map" className="w-full h-[25vh]"></div>;
}
