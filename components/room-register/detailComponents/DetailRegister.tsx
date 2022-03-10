import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import SubHeader from "../SubHeader";
import TransactionType from "./TransactionType";
import Price from "./Price";
import ManagementFee from "./ManagementFee";
import Floor from "./Floor";
import Area from "./Area";
import Elevator from "./Elevator";
import Parking from "./Parking";
import Option from "./Option";
import MoveDate from "./MoveDate";
import DetailText from "./DetailText";
import Owner from "./Owner";
import Pet from "./Pet";
import Loan from "./Loan";

export default function DetailRegister() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    return (
        <div className="h-full">
            <div className="w-screen h-4  bg-room_register_bg border-t border-border_color"></div>
            <SubHeader title="2. 상세정보" />
            <div className="px-room_register_pd w-screen mb-4">
                <TransactionType />
                <Price />
                <ManagementFee />
                <Floor />
                <Area />
                <Elevator />
                <Parking />
                <Option />
                <MoveDate />
                <DetailText />
                <Owner />
                <Pet />
                <Loan />
            </div>
        </div>
    );
}
