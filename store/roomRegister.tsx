// ? action type 정의
export const ROOM_REGISTER_MAIN_ADDRESS = "ROOM_REGISTER_MAIN_ADDRESS";
export const ROOM_REGISTER_DETAIL_ADDRESS = "ROOM_REGISTER_DETAIL_ADDRESS";

export const setMainAddress = (main_address: any) => {
    return {
        type: ROOM_REGISTER_MAIN_ADDRESS,
        ROOM_REGISTER_MAIN_ADDRESS: main_address,
    };
};

const initialState = {
    ROOM_REGISTER_MAIN_ADDRESS: null,
    ROOM_REGISTER_DETAIL_ADDRESS: null,
};

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case ROOM_REGISTER_MAIN_ADDRESS:
            console.log(action);
            return {
                ...state,
                ROOM_REGISTER_MAIN_ADDRESS: action.ROOM_REGISTER_MAIN_ADDRESS,
            };
        default:
            return state;
    }
}
