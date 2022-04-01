import Header from "components/Map/Header";
import RoomType from "components/Filter/RoomType";
import TransactionType from "components/Filter/TransactionType";
import InputRange from "components/common/InputRange";
import ManagementFee from "components/Filter/ManagementFee";
import Floor from "components/Filter/Floor";
import Structure from "components/Filter/Structure";
import ExtraFilter from "components/Filter/ExtraFilter";
import TransactionType2 from "components/Filter/TransactionType2";

export default function Filter() {
    return (
        <div className="mb-12">
            <Header />
            <div className="px-room_register_pd w-screen mb-4">
                <RoomType />
                <TransactionType />
                <InputRange />
                <ManagementFee />
                <Floor />
                <Structure />
                <ExtraFilter />
                <TransactionType2 />
            </div>
        </div>
    );
}
