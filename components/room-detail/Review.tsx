import Image from "next/image";
import { useState } from "react";

export default function Review() {
    const [open, setOpen] = useState(false);
    const openHandler = () => setOpen(!open);
    return (
        <div className="w-full rounded-standard_rounded bg-component_white my-4">
            <div
                onClick={openHandler}
                className={`${open && `border-b border-border_color`}`}
            >
                <div className=" h-28 flex items-center px-standard_pd">
                    <div className="w-16 h-16 rounded-[50%] overflow-hidden">
                        <Image src={require("./person.png")} alt="person" />
                    </div>
                    <div className="ml-4">
                        <div className="text-[1.5rem] font-[600]">둥지냉면</div>
                        <div className="flex gap-1 text-font_gray ">
                            <span className="border-[0.1rem] w-24 text-center py-[0.1rem] rounded-[0.6rem]  border-border_color">
                                대학생
                            </span>
                            <span className="border-[0.1rem] w-24 text-center py-[0.1rem] rounded-[0.6rem]  border-border_color">
                                대학생
                            </span>
                            <span className="border-[0.1rem] w-24 text-center py-[0.1rem] rounded-[0.6rem]  border-border_color">
                                대학생
                            </span>
                        </div>
                    </div>
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
            </div>
            {open && (
                <div className="px-standard_pd">
                    <div>
                        <Image
                            src={require("assets/icon/별점_활성화.svg")}
                            alt="star"
                            width={20}
                        />
                        <Image
                            src={require("assets/icon/별점_활성화.svg")}
                            alt="star"
                            width={20}
                        />
                        <Image
                            src={require("assets/icon/별점_활성화.svg")}
                            alt="star"
                            width={20}
                        />
                        <Image
                            src={require("assets/icon/별점_활성화.svg")}
                            alt="star"
                            width={20}
                        />
                        <Image
                            src={require("assets/icon/별점_비활성화.svg")}
                            alt="star"
                            width={20}
                        />
                    </div>
                    <div className="text-[1.5rem]">
                        가ㅣㅁㄴㅇ러님앎ㅇㄴ 가ㅣㅁㄴㅇ러
                        가ㅣㅁㄴㅇ러님앎ㅇㄴ님앎ㅇㄴ 가ㅣㅁㄴㅇ러님앎ㅇㄴ
                        가ㅣㅁㄴㅇ러님앎ㅇㄴ 가ㅣㅁㄴㅇ러님앎ㅇㄴ 가ㅣㅁㄴㅇ러님
                        가ㅣㅁㄴㅇ러님앎ㅇㄴ 가ㅣㅁㄴㅇ러님앎ㅇㄴ 가ㅣ
                        가ㅣㅁㄴㅇ러님앎ㅇㄴ 가ㅣㅁㄴㅇ러님앎ㅇㄴ
                        가ㅣㅁㄴㅇ러님앎ㅇㄴㅁㄴㅇ러님앎ㅇㄴ
                        가ㅣㅁㄴㅇ러님앎ㅇㄴ 가ㅣㅁㄴㅇ러님앎ㅇㄴ
                        가ㅣㅁㄴㅇ러님앎ㅇㄴ앎ㅇㄴ 가ㅣㅁㄴㅇ러님앎ㅇㄴ
                        가ㅣㅁㄴㅇ러님앎ㅇㄴ 가ㅣㅁㄴㅇ러님앎ㅇㄴ
                    </div>
                </div>
            )}
        </div>
    );
}
