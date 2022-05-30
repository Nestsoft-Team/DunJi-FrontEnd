import DaumPostcode from "react-daum-postcode";
import {
    dispatchMainAddress,
    dispatchPostCodeOpen,
} from "store/modules/roomRegister";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";

const PostCode = () => {
    const [state, dispatch] = useRoomRegisterRedux();

    const handleComplete = (data: any) => {
        let fullAddress = data.autoJibunAddress || data.jibunAddress;
        dispatch(dispatchPostCodeOpen(!state.POSTCODE_OPEN));
        dispatch(dispatchMainAddress(fullAddress));
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
