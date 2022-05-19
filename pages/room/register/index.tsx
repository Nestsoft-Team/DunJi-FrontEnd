import Header from "components/room-register/Header";
import AddressRegister from "components/room-register/AddressComponents";
import { useSelector } from "react-redux";
import { RootState } from "store";
import BottomNextBtn from "components/room-register/BottomNextBtn";
import DetailInfo from "components/room-register/extraComponents";
import BasicInfo from "components/room-register/basicComponents";
import PhotoRegister from "components/room-register/PhotoComponents";
import { useEffect } from "react";
import { roomApi } from "_api";

export default function Register() {
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await roomApi.postRoom();
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    });
    return (
        <div className="pb-[12rem] min-h-screen">
            <Header />
            <AddressRegister />
            <BasicInfo />
            <DetailInfo />
            <PhotoRegister />
            <BottomNextBtn />
        </div>
    );
}
