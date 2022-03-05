import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import SubHeader from "../SubHeader";
import TransactionType from "./TransactionType";
import Price from "./Price";
import ManagementFee from "./ManagementFee";

export default function DetailRegister() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    return (
        <div className="h-full">
            <div className="w-screen h-4  bg-zinc-100 border-t border-border_color"></div>
            <SubHeader title="2. 상세정보" />
            <div className="px-room_register_pd w-screen">
                <TransactionType />
                <Price />
                <ManagementFee />
            </div>
        </div>
    );
}
