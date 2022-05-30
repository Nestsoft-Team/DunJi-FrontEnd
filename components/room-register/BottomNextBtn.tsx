import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/modules/index";
import {
    dispatchAddressOpen,
    dispatchDetailComponentOpen,
    dispatchPostCodeOpen,
} from "store/modules/roomRegister";

export default function BottomNextBtn() {
    const roomRegister = useSelector((state: RootState) => state.roomRegister);
    const dispatch = useDispatch();
    const nextHandler = () => {
        if (
            roomRegister.ROOM_REGISTER_DETAIL_ADDRESS &&
            roomRegister.ROOM_REGISTER_MAIN_ADDRESS
        ) {
            dispatch(dispatchPostCodeOpen(false));
            dispatch(dispatchAddressOpen(false));
            dispatch(dispatchDetailComponentOpen(true));
        }
    };
    return (
        <div
            onClick={nextHandler}
            className="bg-main absolute bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around"
        >
            <div className="text-2xl text-white">다음으로</div>
            <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
    );
}
