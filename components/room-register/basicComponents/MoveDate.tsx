import {
    dispatchPeriodFrom,
    dispatchPeriodNegotiable,
    dispatchPeriodTo,
} from "store/modules/roomRegister";
import InputSelectBox from "components/common/InputSelectBox";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";

export default function MoveDate() {
    const [state, dispatch] = useRoomRegisterRedux();

    const periodFrom = state.availPeriodFrom;
    const periodTo = state.availPeriodTo;
    const negotiable = state.availPeriodConsul;

    const checkHandler = () => {
        negotiable === 0
            ? dispatch(dispatchPeriodNegotiable(1))
            : dispatch(dispatchPeriodNegotiable(0));
    };

    return (
        <>
            <div className="py-4 text-2xl border-t border-border_color mt-8 flex justify-between">
                <span>입주가능기간</span>
                <InputSelectBox
                    converse={false}
                    check={negotiable}
                    content="협의가능"
                    checkHandler={checkHandler}
                />
            </div>
            <div className="w-full flex gap-4 items-center h-room_register_btn_height1 text-4xl ">
                <input
                    type="date"
                    className="bg-white  w-full rounded-standard_rounded h-full text-xl px-4 placeholder-black outline-0 "
                    onChange={(e) => {
                        dispatch(dispatchPeriodFrom(e.target.value));
                    }}
                    value={periodFrom}
                />
                ~
                <input
                    type="date"
                    className="bg-white  w-full rounded-standard_rounded h-full text-xl px-4 placeholder-black outline-0 "
                    onChange={(e) => {
                        dispatch(dispatchPeriodTo(e.target.value));
                    }}
                    value={periodTo}
                />
            </div>
        </>
    );
}
