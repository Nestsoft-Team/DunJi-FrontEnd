import Header from "components/filter/Header";
import RoomType from "components/filter/RoomType";
import TransactionType from "components/filter/TransactionType";
import InputRange from "components/common/InputRange";
import ManagementFee from "components/filter/ManagementFee";
import Floor from "components/filter/Floor";
import Structure from "components/filter/Structure";
import ExtraFilter from "components/filter/ExtraFilter";
import TransactionType2 from "components/filter/TransactionType2";
import PriceUnit from "components/filter/PriceUnit";
import ApprovalDate from "components/filter/ApprovalDate";

export default function Filter() {
    return (
        <div className="mb-12">
            <Header />
            <div className="px-standard_pd w-screen mb-4">
                <RoomType />
                <TransactionType />
                <PriceUnit />
                <InputRange />
                <ManagementFee />
                <Floor />
                <Structure />
                <ApprovalDate />
                <ExtraFilter />
                <TransactionType2 />
            </div>
        </div>
    );
}
