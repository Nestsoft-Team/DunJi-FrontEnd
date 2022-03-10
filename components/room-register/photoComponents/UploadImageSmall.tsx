import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type propsType = {
    file: string;
    setFile: Function;
    index: number;
};

export default function UploadImageSmall({ file, setFile, index }: propsType) {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files instanceof FileList)
            reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            if (reader.readyState === 2) setFile(String(reader.result));
        };
    };
    return (
        <div className="bg-room_register_bg h-full w-full rounded-room_register_rounded flex items-center justify-center relative">
            {file ? (
                <div>
                    <label htmlFor="image-upload">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src={file}
                            alt="preview-img"
                        />
                    </label>
                    <input
                        onChange={onChange}
                        type="file"
                        className="hidden"
                        id="image-upload"
                        accept="image/*"
                    />
                </div>
            ) : (
                <>
                    <label
                        className="text-2xl  border-[0.1rem] border-border_color rounded-[50%] text-border_color w-14 h-14 flex items-center justify-center "
                        htmlFor={`image-upload-${index}`}
                    >
                        <FontAwesomeIcon icon="plus" />
                    </label>
                    <input
                        onChange={onChange}
                        type="file"
                        className="hidden"
                        id={`image-upload-${index}`}
                        accept="image/*"
                    />
                </>
            )}
        </div>
    );
}
