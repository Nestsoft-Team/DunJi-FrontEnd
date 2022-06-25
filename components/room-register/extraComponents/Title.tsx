import CategoryHeader from "components/common/CategoryHeader";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { dispatchTitle } from "store/modules/roomRegister";

export default function Title() {
    const [state, dispatch] = useRoomRegisterRedux();
    const title = state.title;
    return (
        <>
            <CategoryHeader title="방 제목" />
            <input
                className="h-room_register_btn_height1 w-full rounded-standard_rounded  text-xl pl-4 placeholder-font_gray outline-0"
                value={title}
                placeholder="제목"
                onChange={(e) => dispatch(dispatchTitle(e.target.value))}
            />
        </>
    );
}
