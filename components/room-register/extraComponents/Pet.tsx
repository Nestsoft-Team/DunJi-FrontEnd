import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { dispatchPet } from "store/modules/roomRegister";
import ChooseOneBtn from "../../common/ChooseOneBtn";

export default function Pet() {
    const [state, dispatch] = useRoomRegisterRedux();

    const pet = state.pet;
    const checkHandler = (index: number) => {
        if (pet === index) dispatch(dispatchPet(2));
        else dispatch(dispatchPet(index));
    };

    return (
        <div className="w-full grid grid-cols-[1fr_2fr] h-room_register_btn_height1 mt-4 text-[1.3rem] ">
            <div className="flex items-center h-full">반려동물</div>
            <ChooseOneBtn check={pet} checkHandler={checkHandler} />
        </div>
    );
}
