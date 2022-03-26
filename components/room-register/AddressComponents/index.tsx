import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import PostCode from "components/daum-postcode";
import Map from "components/room-register/AddressComponents/Map";
import { useState } from "react";
import {
    dispatchDetailAddress,
    dispatchPostCodeOpen,
} from "store/roomRegister";
import SubHeader from "../SubHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddressRegister() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);
    const [detailAddress, updateDetailAddress] = useState("");
    const btnHandler = (val: Boolean) => dispatch(dispatchPostCodeOpen(val));
    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        updateDetailAddress(e.currentTarget.value);
        dispatch(dispatchDetailAddress(e.currentTarget.value));
    };
    return (
        <>
            {!roomRegister.ROOM_REGISTER_POSTCODE_OPEN && <SubHeader />}
            {roomRegister.ROOM_REGISTER_ADDRESS_OPEN && (
                <>
                    {!roomRegister.ROOM_REGISTER_POSTCODE_OPEN && (
                        <>
                            <div className="px-room_register_pd  w-full">
                                <div className="text-lg my-8 text-center">
                                    주소는 동, 면, 읍, 단지명 까지만 노출됩니다.
                                </div>
                                <button
                                    className="flex items-center justify-center mb-8 bg-component_white w-full 
                                    h-[6vh]
                                    text-2xl rounded-[20rem]"
                                    onClick={() =>
                                        btnHandler(
                                            !roomRegister.ROOM_REGISTER_POSTCODE_OPEN
                                        )
                                    }
                                >
                                    <FontAwesomeIcon icon="magnifying-glass" />
                                    &nbsp; 주소 찾기
                                </button>
                            </div>
                        </>
                    )}
                    {roomRegister.ROOM_REGISTER_POSTCODE_OPEN && <PostCode />}
                    {roomRegister.ROOM_REGISTER_MAIN_ADDRESS &&
                        !roomRegister.ROOM_REGISTER_POSTCODE_OPEN && (
                            <>
                                <div className="w-screen px-room_register_pd ">
                                    <Map />
                                </div>
                                <div className="w-screen justify-between px-room_register_pd  items-center text-xl">
                                    <div className="mt-12 mb-4 text-2xl">
                                        주소 등록
                                        <span className="text-orange">*</span>
                                    </div>
                                    <div
                                        className="
                                        flex flex-col contents-center
                                    bg-component_white   rounded-2xl overflow-hidden"
                                    >
                                        <div className="p-4 border-b border-border_color">
                                            {
                                                roomRegister.ROOM_REGISTER_MAIN_ADDRESS
                                            }
                                        </div>
                                        <input
                                            className="p-4 h-full w-full bg-transparent outline-0
                                            placeholder:text-font_gray"
                                            type="text"
                                            value={detailAddress}
                                            onChange={inputHandler}
                                            placeholder="상세 주소를 입력해주세요"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                </>
            )}
        </>
    );
}
