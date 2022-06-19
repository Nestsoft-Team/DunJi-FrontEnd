import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { postRoom } from "store/modules/roomRegister";

export default function BottomNextBtn() {
    const [state, dispatch] = useRoomRegisterRedux();
    const checkHandler = () => {
        dispatch(postRoom());
    };
    return (
        <div
            className="bg-main absolute bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around"
            onClick={checkHandler}
        >
            <div className="text-2xl text-white">방 내놓기</div>
            <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
    );
}
