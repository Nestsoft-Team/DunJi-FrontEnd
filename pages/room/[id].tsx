import Header from "components/room-detail/Header";
import ImageSlide from "components/room-detail/ImageSlide";
import Title from "components/room-detail/Title";
import BriefInfo from "components/room-detail/BriefInfo";
import Review from "components/room-detail/Review";
import Info from "components/room-detail/Info";
import Price from "components/room-detail/Price";
import Option from "components/room-detail/Option";
import Location from "components/room-detail/Location";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { mapApi } from "_api";
// import LifeInfo from "components/room-detail/LifeInfo";

export default function RoomDetail() {
    const router = useRouter();
    const { id } = router.query;
    const { status, data } = useQuery(
        ["getRoomDetailData", id],
        () => mapApi.getRoomDetail(id),
        { enabled: id !== undefined }
    );
    const roomData = data && data?.data.Room_Data;

    return (
        <div className="pb-[12rem] w-screen">
            {status === "success" && (
                <>
                    <Header title={roomData.address} />
                    <ImageSlide />
                    <div className="px-standard_pd">
                        <Title
                            title={roomData.address}
                            price={roomData.price}
                            deposit={roomData.deposit}
                            priceUnit={roomData.priceUnit}
                        />
                        <BriefInfo
                            roomSize={roomData.roomSize}
                            floor={roomData.floor}
                            entireFloor={roomData.entireFloor}
                            struct={roomData.struct}
                        />
                        <Review explain={roomData.explain} />
                        <Info
                            availPeriodFrom={roomData.availPeriodFrom}
                            availPeriodTo={roomData.availPeriodTo}
                            availPeriodConsul={roomData.availPeriodConsul}
                            roomSize={roomData.roomSize}
                            floor={roomData.floor}
                            struct={roomData.struct}
                            detailAddress={roomData.detailAddress}
                        />
                        <Price
                            price={roomData.price}
                            deposit={roomData.deposit}
                            manageCost={roomData.manageCost}
                            manageElec={roomData.manageElec}
                            manageGas={roomData.manageGas}
                            manageWater={roomData.manageWater}
                            manageInternet={roomData.manageInternet}
                            manageTV={roomData.manageTV}
                        />
                        {/* <LifeInfo />  생략 컴포넌트 */}
                        <Option />
                        <Location
                            latitude={roomData.latitude}
                            longitude={roomData.longitude}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
