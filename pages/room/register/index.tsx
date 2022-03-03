import { useState } from "react";
import Header from "components/room-register/Header";
import AddressRegister from "components/room-register/AddressRegister";
import { useSelector } from "react-redux";
import { RootState } from "store";
import BottomNextBtn from "components/room-register/BottomNextBtn";

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
            <BottomNextBtn />
        </div>
    );
}
