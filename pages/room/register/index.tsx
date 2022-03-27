import Header from "components/room-register/Header";
import AddressRegister from "components/room-register/addressComponents";
import { useSelector } from "react-redux";
import { RootState } from "store";
import BottomNextBtn from "components/room-register/BottomNextBtn";
import DetailInfo from "components/room-register/extraComponents";
import BasicInfo from "components/room-register/basicComponents";
import PhotoRegister from "components/room-register/PhotoComponents";

export default function Register() {
    const roomRegister = useSelector((state: RootState) => state.roomRegister);
    return (
        <>
            <div className=" relative pb-[12rem] min-h-screen">
                <Header />
                <AddressRegister />
                <BasicInfo />
                <DetailInfo />
                <PhotoRegister />
                <BottomNextBtn />
            </div>
        </>
    );
}
