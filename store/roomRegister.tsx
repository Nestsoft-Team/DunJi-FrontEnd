export const ROOM_REGISTER_MAIN_ADDRESS = "ROOM_REGISTER_MAIN_ADDRESS";
export const ROOM_REGISTER_DETAIL_ADDRESS = "ROOM_REGISTER_DETAIL_ADDRESS";

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

const initialState = {
    ROOM_REGISTER_MAIN_ADDRESS: null,
    ROOM_REGISTER_DETAIL_ADDRESS: null,
};

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case ROOM_REGISTER_MAIN_ADDRESS:
            return {
                ...state,
                ROOM_REGISTER_MAIN_ADDRESS: action.ROOM_REGISTER_MAIN_ADDRESS,
            };
        case ROOM_REGISTER_DETAIL_ADDRESS:
            return {
                ...state,
                ROOM_REGISTER_DETAIL_ADDRESS:
                    action.ROOM_REGISTER_DETAIL_ADDRESS,
            };
        default:
            return state;
    }
}
