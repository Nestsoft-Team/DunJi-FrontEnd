import DuplicateSelectBtn from "components/common/DuplicateSelectBtn";
import DuplicateSelect from "hooks/useDuplicateSelect";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/modules";
import { dispatchOptionSelect } from "store/modules/roomRegister";

export default function Option() {
    const typeArr = useMemo(
        () => [
            "에어컨",
            "냉장고",
            "세탁기",
            "가스레인지",
            "인덕션",
            "전자레인지",
            "책상",
            "책장",
            "침대",
            "옷장",
            "싱크대",
            "신발장",
        ],
        []
    );
    const state = useSelector((state: RootState) => state.roomRegister);

    const optionSelectStateArr = state.OPTION;

    const [checkHandler] = DuplicateSelect(
        optionSelectStateArr,
        typeArr,
        dispatchOptionSelect
    );
    return (
        <>
            <div className="py-4 text-2xl mt-4">옵션</div>
            <div className=" grid grid-cols-3 gap-room_register_gap ">
                {typeArr.map((item, index) => (
                    <DuplicateSelectBtn
                        key={index}
                        value={item}
                        check={optionSelectStateArr[index]}
                        index={index}
                        checkHandler={checkHandler}
                        blockCheck={1}
                    />
                ))}
            </div>
        </>
    );
}
