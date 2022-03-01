import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Header from "components/room-register/Header";
import AddressRegister from "components/room-register/AddressRegister";
import { useSelector } from "react-redux";
import { RootState } from "store";

export default function Register() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const roomRegister = useSelector((state: RootState) => state.roomRegister);
    console.log(roomRegister);
    return (
        <div className="h-screen relative flex flex-col items-center">
            <Header isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
            <AddressRegister
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
            />
            <div
                className="bg-orange absolute bottom-0 w-screen flex flex-col items-center
                h-[8rem] justify-around
            "
            >
                <div className="text-2xl text-white">다음으로</div>
                <div className="bg-white rounded-[2rem] w-[15rem] h-2" />
            </div>
        </div>
    );
}
