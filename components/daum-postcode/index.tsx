import DaumPostcode from "react-daum-postcode";
import { dispatchAddressOpen, dispatchMainAddress } from "store/roomRegister";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

const PostCode = () => {
    const dispatch = useDispatch();
    const RoomRegister = useSelector((state: RootState) => state.roomRegister);

    const handleComplete = (data: any) => {
        let fullAddress = data.autoJibunAddress || data.jibunAddress;
        dispatch(dispatchAddressOpen(!RoomRegister.ROOM_REGISTER_ADDRESS_OPEN));
        dispatch(dispatchMainAddress(fullAddress));
    };

    const postCodeStyle = {
        height: "100%",
    };
    return (
        <>
            {RoomRegister.ROOM_REGISTER_ADDRESS_OPEN && (
                <DaumPostcode
                    style={postCodeStyle}
                    onComplete={handleComplete}
                />
            )}
        </>
    );
};

export default PostCode;
