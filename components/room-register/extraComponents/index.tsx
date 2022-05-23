import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import SubHeader from "../SubHeader";
import Parking from "./Parking";
import Option from "./Option";
import DetailText from "./DetailText";
import Pet from "./Pet";
import Loan from "./Loan";
import Owner from "./Owner";
import Title from "./Title";

export default function DetailRegister() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    return (
        <>
            {roomRegister.COMPONENT_HANDLER === 2 && (
                <div className="h-full">
                    <SubHeader />
                    <div className="px-standard_pd w-screen mb-4">
                        <Option />
                        <div className="pt-4 mt-8 border-t border-border_color">
                            <Parking />
                            <Pet />
                            <Loan />
                            <Owner />
                        </div>
                        <Title />
                        <DetailText />
                    </div>
                </div>
            )}
        </>
    );
}
