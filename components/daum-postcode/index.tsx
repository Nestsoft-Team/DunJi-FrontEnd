import DaumPostcode from "react-daum-postcode";
import { dispatchMainAddress } from "store/roomRegister";
import { useDispatch } from "react-redux";

type HeaderProps = {
    isPopupOpen: boolean;
    setIsPopupOpen: Function;
};
const PostCode = ({ isPopupOpen, setIsPopupOpen }: HeaderProps) => {
    const dispatch = useDispatch();
    const handleComplete = (data: any) => {
        let fullAddress = data.autoJibunAddress || data.jibunAddress;
        setIsPopupOpen(false);
        dispatch(dispatchMainAddress(fullAddress));
    };

    const postCodeStyle = {
        height: "100%",
    };
    return (
        <>
            {isPopupOpen && (
                <DaumPostcode
                    style={postCodeStyle}
                    onComplete={handleComplete}
                />
            )}
        </>
    );
};

export default PostCode;
