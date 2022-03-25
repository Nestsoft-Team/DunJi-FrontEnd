import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import SubHeader from "../SubHeader";
import TransactionType from "./TransactionType";
import Price from "./Price";
import ManagementFee from "./ManagementFee";
import Floor from "./Floor";
import Area from "./Area";
import MoveDate from "./MoveDate";

export default function DetailRegister() {
    const dispatch = useDispatch();

    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    return (
        <>
            {roomRegister.ROOM_REGISTER_COMPONENT_HANDLER === 1 && (
                <div className="h-full">
                    <SubHeader />
                    <div className="px-room_register_pd w-screen mb-4">
                        <TransactionType />
                        <Price />
                        <ManagementFee />
                        <Floor />
                        <Area />
                        <MoveDate />
                    </div>
                </div>
            )}
        </>
    );
}