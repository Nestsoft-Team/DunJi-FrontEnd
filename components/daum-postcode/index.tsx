import DaumPostcode from "react-daum-postcode";
import { dispatchMainAddress, dispatchPostCodeOpen } from "store/roomRegister";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

const PostCode = () => {
    const dispatch = useDispatch();
    const RoomRegister = useSelector((state: RootState) => state.roomRegister);

    const handleComplete = (data: any) => {
        let fullAddress = data.autoJibunAddress || data.jibunAddress;
        dispatch(
            dispatchPostCodeOpen(!RoomRegister.ROOM_REGISTER_POSTCODE_OPEN)
        );
        dispatch(dispatchMainAddress(fullAddress));
    };

    const postCodeStyle = {
        height: "70vh",
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
