import { useMemo } from "react";
import CategoryHeader from "components/common/CategoryHeader";
import useNoDuplicateSelect from "hooks/useNoDuplicateSelect";
import NoDuplicateSelectBtn from "components/common/NoDuplicateSelectBtn";
import { dispatchPriceUnit } from "store/modules/roomRegister";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";

export default function PriceUnit() {
    const typeArr = useMemo(
        () => ["일세", "주세", "월세", "반전세", "전세"],
        []
    );
    const [state] = useRoomRegisterRedux();

    const [selectArr, checkHandler] = useNoDuplicateSelect(
        typeArr,
        dispatchPriceUnit,
        state.priceUnit
    );

    return (
        <>
            <CategoryHeader title="가격 단위" />
            <div className="w-full grid grid-cols-3 gap-room_register_gap">
                {typeArr.map((item, index) => (
                    <NoDuplicateSelectBtn
                        key={index}
                        value={item}
                        check={selectArr[index]}
                        index={index}
                        checkHandler={checkHandler}
                    />
                ))}
            </div>
        </>
    );
}
