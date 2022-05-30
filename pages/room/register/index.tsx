import Header from "components/room-register/Header";
import AddressRegister from "components/room-register/AddressComponents";
import { useDispatch, useSelector } from "react-redux";
import BottomNextBtn from "components/room-register/BottomNextBtn";
import DetailInfo from "components/room-register/extraComponents";
import BasicInfo from "components/room-register/basicComponents";
import PhotoRegister from "components/room-register/PhotoComponents";
import { roomApi } from "_api";
import { RootState } from "store/modules";

export default function Register() {
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let response = await roomApi.postRoom();
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     };
    //     fetchData();
    // });

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
