export const ROOM_REGISTER_ADDRESS_OPEN = "ROOM_REGISTER_ADDRESS_OPEN";
export const ROOM_REGISTER_MAIN_ADDRESS = "ROOM_REGISTER_MAIN_ADDRESS";
export const ROOM_REGISTER_DETAIL_ADDRESS = "ROOM_REGISTER_DETAIL_ADDRESS";
export const ROOM_REGISTER_DETAIL_INFO_OPEN = "ROOM_REGISTER_DETAIL_INFO_OPEN";
export const ROOM_REGISTER_DETAIL_INFO = "ROOM_REGISTER_DETAIL_INFO";

export const dispatchAddressOpen = (value: Boolean) => {
    return {
        type: ROOM_REGISTER_ADDRESS_OPEN,
        ROOM_REGISTER_ADDRESS_OPEN: value,
    };
};
export const dispatchMainAddress = (main_address: String) => {
    return {
        type: ROOM_REGISTER_MAIN_ADDRESS,
        ROOM_REGISTER_MAIN_ADDRESS: main_address,
    };
};
export const dispatchDetailAddress = (detail_address: String) => {
    return {
        type: ROOM_REGISTER_DETAIL_ADDRESS,
        ROOM_REGISTER_DETAIL_ADDRESS: detail_address,
    };
};
export const dispatchDetailInfoOpen = () => {
    return {
        type: ROOM_REGISTER_DETAIL_INFO_OPEN,
    };
};

const initialState = {
    ROOM_REGISTER_ADDRESS_OPEN: false,
    ROOM_REGISTER_MAIN_ADDRESS: null,
    ROOM_REGISTER_DETAIL_ADDRESS: null,
    ROOM_REGISTER_DETAIL_INFO_OPEN: false,
};

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
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
        case ROOM_REGISTER_DETAIL_INFO_OPEN: // 상세 정보 입력 컴포넌트 열고 닫기
            return {
                ...state,
                ROOM_REGISTER_DETAIL_INFO_OPEN: true,
            };
        default:
            return state;
    }
}
