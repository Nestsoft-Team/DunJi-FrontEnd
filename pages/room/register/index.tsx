import Header from "components/room-register/Header";
import AddressRegister from "components/room-register/AddressComponents";
import BottomNextBtn from "components/room-register/BottomNextBtn";
import DetailInfo from "components/room-register/extraComponents";
import BasicInfo from "components/room-register/basicComponents";
import PhotoRegister from "components/room-register/PhotoComponents";

export default function Register() {
    return (
        <div className="pb-[12rem] min-h-screen relative">
            <Header />
            <AddressRegister />
            <BasicInfo />
            <DetailInfo />
            <PhotoRegister />
            <BottomNextBtn />
        </div>
    );
}
