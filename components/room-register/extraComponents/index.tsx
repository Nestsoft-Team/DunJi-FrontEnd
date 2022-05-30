import SubHeader from "../SubHeader";
import Parking from "./Parking";
import Option from "./Option";
import DetailText from "./DetailText";
import Pet from "./Pet";
import Loan from "./Loan";
import Title from "./Title";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";

export default function DetailRegister() {
    const [state, dispatch] = useRoomRegisterRedux();

    return (
        <>
            {state.COMPONENT_HANDLER === 2 && (
                <div className="h-full">
                    <SubHeader />
                    <div className="px-standard_pd w-screen mb-4">
                        <Option />
                        <div className="pt-4 mt-8 border-t border-border_color">
                            <Parking />
                            <Pet />
                            <Loan />
                        </div>
                        <Title />
                        <DetailText />
                    </div>
                </div>
            )}
        </>
    );
}
