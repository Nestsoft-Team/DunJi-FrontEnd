import Header from "components/room-detail/Header";
import ImageSlide from "components/room-detail/ImageSlide";
import Title from "components/room-detail/Title";
import BriefInfo from "components/room-detail/BriefInfo";
import Review from "components/room-detail/Review";
import Info from "components/room-detail/Info";
import Price from "components/room-detail/Price";
import Option from "components/room-detail/Option";

export default function RoomDetail() {
    return (
        <div className="pb-[12rem] w-screen">
            <Header />
            <ImageSlide />
            <div className="px-standard_pd">
                <Title />
                <BriefInfo />
                <Review />
                <Info />
                <Price />
                <Option />
            </div>
        </div>
    );
}
