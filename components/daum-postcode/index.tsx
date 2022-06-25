import DaumPostcode from "react-daum-postcode";
import {
    dispatchMainAddress,
    dispatchPostCodeOpen,
    dispatchSido,
    dispatchSigungu,
    dispatchDong,
    dispatchRi,
    dispatchJibun,
} from "store/modules/roomRegister";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";

const PostCode = () => {
    const [state, dispatch] = useRoomRegisterRedux();

    const handleComplete = (data: any) => {
        let fullAddress = data.autoJibunAddress || data.jibunAddress;
        dispatch(dispatchPostCodeOpen(!state.POSTCODE_OPEN));
        dispatch(dispatchMainAddress(fullAddress));
        dispatch(dispatchSido(data.sido));
        dispatch(dispatchSigungu(data.sigungu));
        dispatch(dispatchDong(data.bname || data.bname1 || data.bname2));
        dispatch(dispatchRi(data.roadname));
        dispatch(dispatchJibun(data.roadname));
    };

    const postCodeStyle = {
        height: "70vh",
    };
    return (
        <>
            {state.ADDRESS_OPEN && (
                <DaumPostcode
                    style={postCodeStyle}
                    onComplete={handleComplete}
                />
            )}
        </>
    );
};

export default PostCode;
