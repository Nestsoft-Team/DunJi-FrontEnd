import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/modules";

// roomRegister-redux state,dispatch 반환 훅
export default function useRoomRegisterRedux(): [any, Dispatch<any>] {
    const state = useSelector((state: RootState) => state.roomRegister);
    const dispatch = useDispatch();

    return [state, dispatch];
}
