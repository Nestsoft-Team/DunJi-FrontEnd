import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { dispatchAddressOpen } from "store/roomRegister";

export default function Header() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    return (
        <>
            {roomRegister.ROOM_REGISTER_ADDRESS_OPEN ? (
                <header
                    className="flex w-screen justify-between px-room_register_pd 
        py-4  h-24 items-center text-xl  border-b"
                >
                    <div className="flex text-2xl items-center">
                        <div
                            className="flex items-center"
                            onClick={() => {
                                dispatch(
                                    dispatchAddressOpen(
                                        !roomRegister.ROOM_REGISTER_ADDRESS_OPEN
                                    )
                                );
                            }}
                        >
                            <FontAwesomeIcon icon="chevron-left" />
                            <div className="ml-4">주소 검색</div>
                        </div>
                    </div>
                    <Image
                        width={15}
                        height={15}
                        alt="x"
                        src={require("image/header/x.png")}
                        onClick={() =>
                            dispatch(
                                dispatchAddressOpen(
                                    !roomRegister.ROOM_REGISTER_ADDRESS_OPEN
                                )
                            )
                        }
                    />
                </header>
            ) : (
                <header
                    className="flex w-screen justify-between px-room_register_pd 
                py-4  h-24 items-center text-xl  border-b"
                >
                    <div className="flex text-2xl items-center">
                        <div className="flex items-center" onClick={() => {}}>
                            <FontAwesomeIcon icon="chevron-left" />
                            <div className="ml-4">집 내놓기</div>
                        </div>
                    </div>
                    <div className="text-orange">도움말</div>
                </header>
            )}
        </>
    );
}
