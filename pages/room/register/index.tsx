import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Header from "components/room-register/header";
import AddressRegister from "components/room-register/AddressRegister";

export default function Register() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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
