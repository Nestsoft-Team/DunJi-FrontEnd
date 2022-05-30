import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { dispatchPostCodeOpen } from "store/modules/roomRegister";

export default function Header() {
    const [state, dispatch] = useRoomRegisterRedux();

    return (
        <>
            {state.POSTCODE_OPEN ? (
                <header
                    className="flex w-screen justify-between px-standard_pd 
        py-4  h-24 items-center text-xl  border-b"
                >
                    <div className="flex text-2xl items-center">
                        <div
                            onClick={() => {
                                dispatch(
                                    dispatchPostCodeOpen(!state.POSTCODE_OPEN)
                                );
                            }}
                        >
                            <FontAwesomeIcon icon="chevron-left" />
                        </div>
                        <div className="ml-4">주소 찾기</div>
                    </div>
                </header>
            ) : (
                <header
                    className="flex w-screen justify-between px-standard_pd 
                py-4  h-24 items-center text-xl  border-b"
                >
                    <div className="flex text-2xl items-center">
                        <div>
                            <FontAwesomeIcon icon="chevron-left" />
                        </div>
                        <div className="ml-4">방 내놓기</div>
                    </div>
                    <div className="text-main">도움말</div>
                </header>
            )}
        </>
    );
}
