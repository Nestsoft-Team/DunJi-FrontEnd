import DaumPostcode from "react-daum-postcode";

type HeaderProps = {
    isPopupOpen: boolean;
    setIsPopupOpen: Function;
};
const PostCode = ({ isPopupOpen, setIsPopupOpen }: HeaderProps) => {
    const handleComplete = (data: any) => {
        let fullAddress = data.autoJibunAddress || data.jibunAddress;
        setIsPopupOpen(false);
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
