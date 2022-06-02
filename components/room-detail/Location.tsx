import { useState } from "react";
import Map from "./Map";
import Image from "next/image";

export default function Location() {
    const [open, setOpen] = useState(false);

    const openHandler = () => setOpen(!open);
    return (
        <div className="w-full rounded-standard_rounded bg-component_white my-4">
            <div
                onClick={openHandler}
                className={`${
                    open && `border-b border-border_color`
                } h-20 ml-4 text-[1.5rem] font-[600]  flex items-center px-standard_pd`}
            >
                위치 / 주변
                <div
                    className={`ml-auto w-10 h-12 relative ${
                        open && "rotate-180"
                    }`}
                >
                    <Image
                        src={require("assets/icon/화살표_펼치기.svg")}
                        alt="arrow"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
            </div>
            {open && <Map />}
        </div>
    );
}
