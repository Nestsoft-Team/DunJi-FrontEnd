import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { dispatchComponentHandler } from "store/roomRegister";

export default function SubHeader() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    const onClickHandler = (num: Number) => {
        dispatch(dispatchComponentHandler(num));
    };
    const btnArr = ["주소 등록", "기본 정보", "추가 정보", "사진 등록"];
    return (
        <div className=" text-font_gray flex w-full justify-between px-standard_pd bg-component_white items-center  border-b border-border_color">
            {btnArr.map((title, index) => (
                <button
                    className={`py-4  text-xl  h-max ${
                        roomRegister.ROOM_REGISTER_COMPONENT_HANDLER ===
                            index && "text-main border-b-2 border-main"
                    }`}
                    onClick={() => onClickHandler(index)}
                    key={index}
                >
                    {title}
                </button>
            ))}
        </div>
    );
}
