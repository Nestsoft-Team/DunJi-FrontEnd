import { useSelector, useDispatch } from "react-redux";
import SubHeader from "../SubHeader";
import TransactionType from "./TransactionType";
import Price from "./Price";
import ManagementFee from "./ManagementFee";
import Floor from "./Floor";
import Size from "./Size";
import MoveDate from "./MoveDate";
import RoomType from "./RoomType";
import PriceUnit from "./PriceUnit";

export default function DetailRegister() {
    const roomRegister = useSelector((state: any) => state.roomRegister);

    return (
        <>
            {roomRegister.COMPONENT_HANDLER === 1 && (
                <div className="h-full">
                    <SubHeader />
                    <div className="px-standard_pd w-screen mb-4">
                        <RoomType />
                        <TransactionType />
                        <PriceUnit />
                        <Price />
                        <ManagementFee />
                        <Floor />
                        <Size />
                        <MoveDate />
                    </div>
                </div>
            )}
        </>
    );
}
