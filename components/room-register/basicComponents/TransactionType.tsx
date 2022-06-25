import { useMemo } from "react";
import CategoryHeader from "components/common/CategoryHeader";
import useNoDuplicateSelect from "hooks/useNoDuplicateSelect";
import { dispatchTransactionType } from "store/modules/roomRegister";
import NoDuplicateSelectBtn from "components/common/NoDuplicateSelectBtn";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";

export default function TransactionType() {
    const typeArr = useMemo(() => ["단기임대", "임대", "양도"], []);
    const [state] = useRoomRegisterRedux();

    const [selectArr, checkHandler] = useNoDuplicateSelect(
        typeArr,
        dispatchTransactionType,
        state.dealType
    );

    return (
        <>
            <CategoryHeader title="거래유형" />
            <div className="w-full flex gap-room_register_gap  h-room_register_btn_height1">
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
