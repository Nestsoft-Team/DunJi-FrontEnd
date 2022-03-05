import Header from "components/room-register/Header";
import AddressRegister from "components/room-register/AddressComponents/AddressRegister";
import { useSelector } from "react-redux";
import { RootState } from "store";
import BottomNextBtn from "components/room-register/BottomNextBtn";
import DetailRegister from "components/room-register/detailComponents/DetailRegister";

export default function Register() {
    const roomRegister = useSelector((state: RootState) => state.roomRegister);
    console.log(roomRegister);
    return (
        <div className=" relative pb-[12rem]">
            <Header />
            <AddressRegister />
            <DetailRegister />
            <BottomNextBtn />
        </div>
    );
}
