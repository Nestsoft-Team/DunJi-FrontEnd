import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// 중복 선택이 불가한 버튼 컴포넌트용 훅
export default function useNoDuplicateSelect(
    typeArr: Array<string>,
    dispatchHandler: ActionCreatorWithPayload<any, string>,
    reduxValue: string
): [boolean[], (index: number) => void] {
    const dispatch = useDispatch();
    const length = typeArr.length;

    //버튼 선택 여부를 boolean으로 나타내는 리스트
    const [selectArr, setSelectArr] = useState(() => {
        let arr = Array.from({ length }, () => false);
        if (reduxValue === "") return arr;
        else {
            const index = typeArr.indexOf(reduxValue);
            arr[index] = true;
            return arr;
        }
    });

    // 리덕스와 데이터 동기화

    // 버튼 클릭 시 상단 리스트 값 변경과 리덕스에 적용하는 함수
    const checkHandler = useCallback(
        (index: number) => {
            let arr = Array.from({ length }, () => false);
            arr[index] = !selectArr[index];
            setSelectArr(arr);

            if (selectArr[index] === false) {
                dispatch(dispatchHandler(typeArr[index]));
            } else dispatch(dispatchHandler(""));
        },
        [dispatch, dispatchHandler, length, selectArr, typeArr]
    );

    return [selectArr, checkHandler];
}
