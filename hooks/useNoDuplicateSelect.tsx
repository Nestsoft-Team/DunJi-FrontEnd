import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";

// 중복 선택이 불가한 버튼 컴포넌트용 훅
export default function useNoDuplicateSelect(
    typeArr: Array<string>,
    dispatchHandler: ActionCreatorWithPayload<any, string>
): [boolean[], (index: number) => void] {
    const dispatch = useDispatch();
    const length = typeArr.length;

    //버튼 선택 여부를 boolean으로 나타내는 리스트
    const [selectArr, setSelectArr] = useState(
        Array.from({ length }, () => false)
    );

    // 버튼 클릭 시 상단 리스트 값 변경과 리덕스에 적용하는 함수
    const checkHandler = (index: number) => {
        let arr = Array.from({ length }, () => false);
        arr[index] = !selectArr[index];
        setSelectArr(arr);

        if (selectArr[index] === false) {
            dispatch(dispatchHandler(typeArr[index]));
        } else dispatch(dispatchHandler(""));
    };

    return [selectArr, checkHandler];
}
