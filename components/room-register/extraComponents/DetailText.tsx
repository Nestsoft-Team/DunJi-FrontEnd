import CategoryHeader from "components/common/CategoryHeader";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { dispatchExplain } from "store/modules/roomRegister";

export default function Parking() {
    const [state, dispatch] = useRoomRegisterRedux();
    const explain = state.EXPLAIN;
    return (
        <>
            <CategoryHeader title="상세설명" />
            <textarea
                value={explain}
                onChange={(e) => dispatch(dispatchExplain(e.target.value))}
                className="border border-border_color
                rounded-standard_rounded w-full h-48 p-4 text-xl
                outline-0
                "
            ></textarea>
        </>
    );
}
