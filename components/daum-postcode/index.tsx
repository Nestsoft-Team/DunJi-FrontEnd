import DaumPostcode from "react-daum-postcode";
import { setMainAddress } from "store/roomRegister";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

type HeaderProps = {
    isPopupOpen: boolean;
    setIsPopupOpen: Function;
};
const PostCode = ({ isPopupOpen, setIsPopupOpen }: HeaderProps) => {
    const dispatch = useDispatch();
    const handleComplete = (data: any) => {
        let fullAddress = data.autoJibunAddress || data.jibunAddress;
        setIsPopupOpen(false);
        dispatch(setMainAddress(fullAddress));
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
