import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostCode from "components/daum-postcode";

type HeaderProps = {
    isPopupOpen: boolean;
    setIsPopupOpen: Function;
};

export default function AddressRegister({
    isPopupOpen,
    setIsPopupOpen,
}: HeaderProps) {
    return (
        <>
            <PostCode
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
            />

            {!isPopupOpen && (
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
                    <button
                        className="flex items-center justify-center bg-orange text-white w-80vw
                h-[7vh]
                text-2xl rounded-2xl mt-10"
                        onClick={() => setIsPopupOpen(true)}
                    >
                        주소 찾기
                    </button>
                </>
            )}
        </>
    );
}
