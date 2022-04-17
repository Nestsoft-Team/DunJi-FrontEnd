import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

type propsType = {
    file: string;
    setFile: Dispatch<SetStateAction<string>>;
};

export default function UploadImage({ file, setFile }: propsType) {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files instanceof FileList)
            reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setFile(String(reader.result));
    };
    return (
        <div className="bg-component_white h-full w-full rounded-room_register_rounded flex items-center justify-center relative">
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
                        className="text-4xl  border-2 border-border_color rounded-[50%] text-border_color w-24 h-24 flex items-center justify-center"
                        htmlFor="image-upload"
                    >
                        <FontAwesomeIcon icon="plus" />
                    </label>
                    <input
                        onChange={onChange}
                        type="file"
                        className="hidden"
                        id="image-upload"
                        accept="image/*"
                    />
                </>
            )}
        </div>
    );
}
