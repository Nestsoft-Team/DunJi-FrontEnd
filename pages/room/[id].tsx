import Header from "components/room-detail/Header";
import ImageSlide from "components/room-detail/ImageSlide";
import Title from "components/room-detail/Title";
import BriefInfo from "components/room-detail/BriefInfo";
import Review from "components/room-detail/Review";

export default function RoomDetail() {
    return (
        <div className="pb-[12rem] w-screen">
            <Header />
            <ImageSlide />
            <div className="px-standard_pd">
                <Title />
                <BriefInfo />
                <Review />
            </div>
        </div>
    );
}
