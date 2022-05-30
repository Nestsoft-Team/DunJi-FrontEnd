import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// 중복 선택이 가능한 버튼 컴포넌트용 훅
export default function useDuplicateSelect(
    stateArr: Array<number>,
    typeArr: Array<string>,
    dispatchHandler: ActionCreatorWithPayload<any, string>
): [(index: number) => void, () => void] {
    const dispatch = useDispatch();
    const length = typeArr.length;
    // 버튼 클릭 시 dispatch 함수
    const checkHandler = (index: number, blockCheck: 0 | 1 = 1) => {
        if (blockCheck === 1) {
            let arr = [...stateArr];
            arr[index] = stateArr[index] === 0 ? 1 : 0;
            dispatch(dispatchHandler(arr));
        }
    };

    const resestHandler = () => {
        dispatch(dispatchHandler(Array.from({ length }, () => 0)));
    };

    return [checkHandler, resestHandler];
}
