import { useState } from "react";
import PhotoHeader from "./PhotoHeader";
import UploadImageSmall from "./UploadImageSmall";

export default function RoomImage() {
    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");
    const [file3, setFile3] = useState("");
    const [file4, setFile4] = useState("");
    const [file5, setFile5] = useState("");
    const [file6, setFile6] = useState("");

    const fileArr = [
        { file: file1, setFile: setFile1 },
        { file: file2, setFile: setFile2 },
        { file: file3, setFile: setFile3 },
        { file: file4, setFile: setFile4 },
        { file: file5, setFile: setFile5 },
        { file: file6, setFile: setFile6 },
    ];

    return (
        <div className="py-4">
            <PhotoHeader
                title="거실 / 방 사진 (필수)"
                subTitle="모든 방의 사진을 올려주세요. 사진으로 구조를 파악할 수 있으면 좋습니다. 다양한 각도로 찍어주세요. (최소 2장)"
            />
            <div className="h-64 grid grid-cols-3 gap-4">
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
