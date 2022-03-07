export const ROOM_REGISTER_ADDRESS_OPEN = "ROOM_REGISTER_ADDRESS_OPEN";
export const ROOM_REGISTER_POSTCODE_OPEN = "ROOM_REGISTER_POSTCODE_OPEN";
export const ROOM_REGISTER_MAIN_ADDRESS = "ROOM_REGISTER_MAIN_ADDRESS";
export const ROOM_REGISTER_DETAIL_ADDRESS = "ROOM_REGISTER_DETAIL_ADDRESS";
export const ROOM_REGISTER_DETAIL_COMPONENT_OPEN =
    "ROOM_REGISTER_DETAIL_COMPONENT_OPEN";
export const ROOM_REGISTER_DETAIL_TRANSACTION =
    "ROOM_REGISTER_DETAIL_TRANSACTION";

export const dispatchPostCodeOpen = (value: Boolean) => {
    // postcode 컴포넌트 열고 닫기
    return {
        type: ROOM_REGISTER_POSTCODE_OPEN,
        ROOM_REGISTER_POSTCODE_OPEN: value,
    };
};
export const dispatchAddressOpen = (value: Boolean) => {
    // 주소 등록 컴포넌트 열고 닫기
    return {
        type: ROOM_REGISTER_ADDRESS_OPEN,
        ROOM_REGISTER_ADDRESS_OPEN: value,
    };
};
export const dispatchMainAddress = (main_address: String) => {
    // 메인 주소 입력
    return {
        type: ROOM_REGISTER_MAIN_ADDRESS,
        ROOM_REGISTER_MAIN_ADDRESS: main_address,
    };
};
export const dispatchDetailComponentOpen = (value: Boolean) => {
    // 상세 정보 입력 컴포넌트 열고 닫기
    return {
        type: ROOM_REGISTER_DETAIL_COMPONENT_OPEN,
        ROOM_REGISTER_DETAIL_COMPONENT_OPEN: value,
    };
};
export const dispatchDetailAddress = (detail_address: String) => {
    // 상세 주소 입력
    return {
        type: ROOM_REGISTER_DETAIL_ADDRESS,
        ROOM_REGISTER_DETAIL_ADDRESS: detail_address,
    };
};
export const dispatchTransactionType = (transaction: String) => {
    // 거래유형 입력
    return {
        type: ROOM_REGISTER_DETAIL_TRANSACTION,
        ROOM_REGISTER_DETAIL_TRANSACTION: transaction,
    };
};

const initialState = {
    ROOM_REGISTER_POSTCODE_OPEN: false,
    ROOM_REGISTER_ADDRESS_OPEN: true,
    ROOM_REGISTER_MAIN_ADDRESS: null,
    ROOM_REGISTER_DETAIL_ADDRESS: null,
    ROOM_REGISTER_DETAIL_COMPONENT_OPEN: false,
};

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case ROOM_REGISTER_POSTCODE_OPEN: // postcode 컴포넌트 열고 닫기
            return {
                ...state,
                ROOM_REGISTER_POSTCODE_OPEN: action.ROOM_REGISTER_POSTCODE_OPEN,
            };
        case ROOM_REGISTER_ADDRESS_OPEN: // 주소 등록 컴포넌트 열고 닫기
            return {
                ...state,
                ROOM_REGISTER_ADDRESS_OPEN: action.ROOM_REGISTER_ADDRESS_OPEN,
            };
        case ROOM_REGISTER_MAIN_ADDRESS: // 메인 주소 입력
            return {
                ...state,
                ROOM_REGISTER_MAIN_ADDRESS: action.ROOM_REGISTER_MAIN_ADDRESS,
            };
        case ROOM_REGISTER_DETAIL_ADDRESS: // 상세 주소 입력
            return {
                ...state,
                ROOM_REGISTER_DETAIL_ADDRESS:
                    action.ROOM_REGISTER_DETAIL_ADDRESS,
            };
        case ROOM_REGISTER_DETAIL_COMPONENT_OPEN: // 상세 정보 입력 컴포넌트 열고 닫기
            return {
                ...state,
                ROOM_REGISTER_DETAIL_COMPONENT_OPEN:
                    action.ROOM_REGISTER_DETAIL_COMPONENT_OPEN,
            };
        default:
            return state;
    }
}
