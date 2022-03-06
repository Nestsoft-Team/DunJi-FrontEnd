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
            {!roomRegister.ROOM_REGISTER_POSTCODE_OPEN && (
                <SubHeader title="1.주소 등록" />
            )}
            {roomRegister.ROOM_REGISTER_ADDRESS_OPEN && (
                <>
                    {!roomRegister.ROOM_REGISTER_POSTCODE_OPEN && (
                        <>
                            <div className="px-room_register_pd  w-full">
                                <button
                                    className="flex items-center justify-center mb-8 bg-orange text-white w-full 
                                    h-[7vh]
                                    text-2xl rounded-2xl mt-10"
                                    onClick={() =>
                                        btnHandler(
                                            !roomRegister.ROOM_REGISTER_POSTCODE_OPEN
                                        )
                                    }
                                >
                                    주소 찾기
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
                                <div className="w-full px-room_register_pd py-8 text-2xl font-semibold border-b border-border_color">
                                    {roomRegister.ROOM_REGISTER_MAIN_ADDRESS}
                                </div>
                                <div className="w-screen justify-between px-room_register_pd  items-center text-xl">
                                    <div className="my-4 font-semibold">
                                        상세주소를 입력해 주세요.
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full px-4 outline-0 focus:shadow-thick border border-border_color h-[6vh]  rounded-2xl"
                                        value={detailAddress}
                                        placeholder="동/호수를 입력해 주세요."
                                        onChange={inputHandler}
                                    ></input>
                                </div>
                            </>
                        )}
                </>
            )}
        </>
    );
}
