import { createAction, handleActions } from "redux-actions";

export const COMPONENT_HANDLER = "room-register/COMPONENT_HANDLER";
export const ADDRESS_OPEN = "room-register/ADDRESS_OPEN";
export const POSTCODE_OPEN = "room-register/POSTCODE_OPEN";
export const MAIN_ADDRESS = "room-register/MAIN_ADDRESS";
export const DETAIL_ADDRESS = "room-register/DETAIL_ADDRESS";
export const DETAIL_COMPONENT_OPEN = "room-register/DETAIL_COMPONENT_OPEN";
export const DETAIL_TRANSACTION = "room-register/DETAIL_TRANSACTION";

export const dispatchComponentHandler = createAction(
    COMPONENT_HANDLER,
    (value: number) => value
);

export const dispatchPostCodeOpen = createAction(
    POSTCODE_OPEN,
    (value: boolean) => value
);

export const dispatchAddressOpen = createAction(
    ADDRESS_OPEN,
    (value: boolean) => value
);

export const dispatchMainAddress = createAction(
    MAIN_ADDRESS,
    (value: string) => value
);

export const dispatchDetailComponentOpen = createAction(
    DETAIL_COMPONENT_OPEN,
    (value: boolean) => value
);

export const dispatchDetailAddress = createAction(
    DETAIL_ADDRESS,
    (value: string) => value
);

export const dispatchTransactionType = createAction(
    DETAIL_TRANSACTION,
    (value: string) => value
);

type initialStateTypes = {
    COMPONENT_HANDLER: number;
    POSTCODE_OPEN: boolean;
    ADDRESS_OPEN: boolean;
    MAIN_ADDRESS: null | string;
    DETAIL_ADDRESS: null | string;
    DETAIL_COMPONENT_OPEN: boolean;
};

const initialState: initialStateTypes = {
    COMPONENT_HANDLER: 0,
    POSTCODE_OPEN: false,
    ADDRESS_OPEN: true,
    MAIN_ADDRESS: null,
    DETAIL_ADDRESS: null,
    DETAIL_COMPONENT_OPEN: false,
};
type actionType = {
    type: string;
    payload: any;
};

const reducer = handleActions(
    {
        [COMPONENT_HANDLER]: (state, action: actionType) => ({
            ...state,
            COMPONENT_HANDLER: action.payload,
        }), // 주소 등록,기본 정보, 추가 정보, 사진 등록 컴포넌트 열고 닫기
        [POSTCODE_OPEN]: (state, action) => ({
            ...state,
            POSTCODE_OPEN: action.payload,
        }), // postcode 컴포넌트 열고 닫기

        [ADDRESS_OPEN]: (state, action) => ({
            ...state,
            ADDRESS_OPEN: action.payload,
        }), // 주소 등록 컴포넌트 열고 닫기
        [MAIN_ADDRESS]: (state, action) => ({
            ...state,
            MAIN_ADDRESS: action.payload,
        }), // 메인 주소 입력

        [DETAIL_ADDRESS]: (state, action) => ({
            ...state,
            DETAIL_ADDRESS: action.payload,
        }), // 상세 주소 입력

        [DETAIL_COMPONENT_OPEN]: (state, action) => ({
            ...state,
            DETAIL_COMPONENT_OPEN: action.payload,
        }), // 상세 정보 입력 컴포넌트 열고 닫기
    },
    initialState
);

export default reducer;
