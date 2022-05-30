import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { dispatchCar } from "store/modules/roomRegister";
import ChooseOneBtn from "../../common/ChooseOneBtn";

export default function Parking() {
    const [state, dispatch] = useRoomRegisterRedux();

    const car = state.CAR;
    const checkHandler = (index: number) => {
        if (car === index) dispatch(dispatchCar(2));
        else dispatch(dispatchCar(index));
    };
    return (
        <div className="w-full grid grid-cols-[1fr_2fr] h-room_register_btn_height1 mt-4 text-[1.3rem]">
            <div className="flex items-center h-full">주차공간</div>
            <ChooseOneBtn check={car} checkHandler={checkHandler} />
        </div>
    );
}
