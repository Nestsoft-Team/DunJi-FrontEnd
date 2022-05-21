import { useState } from "react";
import PhotoHeader from "./PhotoHeader";
import UploadImageSmall from "./UploadImageSmall";

export default function RoomImage() {
    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");
    const [file3, setFile3] = useState("");

    const fileArr = [
        { file: file1, setFile: setFile1 },
        { file: file2, setFile: setFile2 },
        { file: file3, setFile: setFile3 },
    ];

    return (
        <div className="py-4">
            <PhotoHeader
                title="주방/화장실 사진"
                subTitle="주방이 없는 집은 등록하실 수 없습니다. (최소 2장)"
            />
            <div className="h-32 grid grid-cols-3 gap-4">
                {fileArr.map((item, index) => (
                    <UploadImageSmall
                        index={index}
                        file={item.file}
                        setFile={item.setFile}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
