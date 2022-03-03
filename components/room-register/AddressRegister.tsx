import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import PostCode from "components/daum-postcode";
import Map from "components/room-register/Map";
import { useState } from "react";
import { dispatchAddressOpen, dispatchDetailAddress } from "store/roomRegister";

export default function AddressRegister() {
    const dispatch = useDispatch();
    const RoomRegister = useSelector((state: RootState) => state.roomRegister);
    const [detailAddress, updateDetailAddress] = useState("");
    const btnHandler = (val: Boolean) => dispatch(dispatchAddressOpen(val));
    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        updateDetailAddress(e.currentTarget.value);
        dispatch(dispatchDetailAddress(e.currentTarget.value));
    };
    return (
        <>
            <PostCode />
            {!RoomRegister.ROOM_REGISTER_ADDRESS_OPEN && (
                <>
                    <div
                        className="flex w-screen justify-between px-room_register_pd 
                              py-4  h-24 items-center text-xl  border-b"
                    >
                        <div className="flex items-center">
                            <div className="text-3xl">1. 주소 등록</div>
                        </div>
                        <FontAwesomeIcon
                            className="text-3xl"
                            icon="chevron-down"
                        />
                    </div>
                    <div className="px-room_register_pd  w-full">
                        <button
                            className="flex items-center justify-center mb-8 bg-orange text-white w-full 
                        h-[7vh]
                        text-2xl rounded-2xl mt-10"
                            onClick={() =>
                                btnHandler(
                                    !RoomRegister.ROOM_REGISTER_ADDRESS_OPEN
                                )
                            }
                        >
                            주소 찾기
                        </button>
                    </div>
                    {RoomRegister.ROOM_REGISTER_MAIN_ADDRESS && (
                        <>
                            <div className="w-screen px-room_register_pd ">
                                <Map />
                            </div>
                            <div className="w-full px-room_register_pd py-8 text-2xl font-semibold border-b">
                                {RoomRegister.ROOM_REGISTER_MAIN_ADDRESS}
                            </div>
                            <div className="w-screen justify-between px-room_register_pd h-24 items-center text-xl">
                                <div className="my-4 font-semibold">
                                    상세주소를 입력해 주세요.
                                </div>
                                <input
                                    type="text"
                                    className="w-full px-4 outline-0 focus:shadow-thick border h-[6vh]  rounded-2xl"
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
{
}
