import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";

type propsType = {
    inputRef: RefObject<HTMLInputElement>;
    inputContainerRef: RefObject<HTMLInputElement>;
};
export default function Header({ inputRef, inputContainerRef }: propsType) {
    function inputShadowHandler() {
        //input Box 클릭 시 그림자 추가
        // inputContainerRef.current &&
        //     inputContainerRef.current.classList.add("");
    }

    return (
        <header className="h-[20vh] w-full px-base_pd pt-6">
            <div className="text-4xl flex items-center justify-between">
                <Link href="/">
                    <a>
                        <FontAwesomeIcon icon="chevron-left" />
                    </a>
                </Link>
                <div className="text-orange">
                    <FontAwesomeIcon icon="bars" />
                </div>
            </div>
            <div
                ref={inputContainerRef}
                className="w-full h-20  mt-8 rounded-2xl 
                     flex items-center border px-[4%] shadow-xl"
            >
                <div className=" w-[8%] ">
                    <Image
                        src={require("image/map/search.png")}
                        alt="serarch"
                    ></Image>
                </div>
                <input
                    placeholder="대학교명을 입력해주세요."
                    onFocus={inputShadowHandler}
                    ref={inputRef}
                    className="pl-4 w-[84%] h-full outline-0 text-2xl"
                ></input>
                <div className=" w-[8%] ">
                    <Image
                        src={require("image/map/filter_yellow.png")}
                        alt="serarch"
                    ></Image>
                </div>
            </div>
        </header>
    );
}
