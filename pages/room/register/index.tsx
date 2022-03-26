import Header from "components/room-register/Header";
import AddressRegister from "components/room-register/AddressComponents";
import { useSelector } from "react-redux";
import { RootState } from "store";
import BottomNextBtn from "components/room-register/BottomNextBtn";
import DetailRegister from "components/room-register/detailComponents/DetailRegister";
import PhotoRegister from "components/room-register/photoComponents";

export default function Register() {
    const roomRegister = useSelector((state: RootState) => state.roomRegister);
    console.log(roomRegister);
    return (
        <div className=" relative pb-[12rem] h-screen">
            <Header />
            <AddressRegister />
            {/* <DetailRegister /> */}
            {/* <PhotoRegister /> */}
            <BottomNextBtn />
        </div>
    );
}
