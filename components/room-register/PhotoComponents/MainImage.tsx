import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { useState } from "react";
import PhotoHeader from "./PhotoHeader";
import UploadImage from "./UploadImage";

export default function MainImage() {
    const [file, setFile] = useState("");

    return (
        <div className="py-4">
            <PhotoHeader
                title="대표사진"
                subTitle="방을 대표하는 사진입니다. 밝은 사진이 좋습니다."
            />
            <div className="h-48">
                <UploadImage file={file} setFile={setFile} />
            </div>
        </div>
    );
}
