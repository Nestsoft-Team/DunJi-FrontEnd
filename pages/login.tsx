import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login({}) {
    const [check, setCheck] = useState(false);
    const checkBoxHandler = (check: boolean) => {
        setCheck(!check);
    };
    return (
        <div className="flex min-w-20 items-center flex-col mx-auto my-40 w-main_width  font-bold ">
            <h1 className="text-6xl mb-8  text-yellow font-NotoSansKR">
                DUNGJI
            </h1>
            <form className="w-full flex flex-col">
                <input
                    className=" p-4 mb-4 h-16 border-solid border border-black text-blur rounded-2xl  outline-0
                    focus:border-yellow"
                    placeholder="이메일 주소 입력"
                ></input>
                <input
                    className=" p-4 mb-4 h-16 border-solid border border-black text-blur rounded-2xl  outline-0
                    focus:border-yellow"
                    placeholder="비밀번호 입력"
                ></input>
                <button className="bg-yellow h-16  text-2xl ">로그인</button>
            </form>
            <div className="w-full flex items-center h-16 mb-4 ">
                <input
                    type="checkbox"
                    id="id-save"
                    defaultChecked={check}
                    className="hidden"
                />
                <label
                    htmlFor="id-save"
                    className={`font-SegoeUI   inline-block before:content-[''] w-6 h-6 border border-blur mr-2  algin-middle font-NotoSansKR  rounded-md text-center ${
                        check ? "before:content-['✔️'] text-white " : ""
                    }`}
                    onClick={() => checkBoxHandler(check)}
                ></label>
                <span className="text-blur text-xl font-normal">
                    아이디 저장
                </span>
                <div className="ml-auto font-normal">
                    <Link href="/register/policy">
                        <a className="  mr-2 after:content-['|'] after:pl-2">
                            회원가입
                        </a>
                    </Link>
                    <Link href="/password_reset">비밀번호 재설정</Link>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4 border-t border-blur pt-8">
                <div className="mb-8 text-xl font-normal">간편 로그인하기</div>
                <span className="flex gap-6">
                    <Image
                        width={30}
                        height={30}
                        src={require("../image/naver_logo.png")}
                        alt="naver_logo"
                    />
                    <Image
                        width={30}
                        height={30}
                        src={require("../image/google_logo.png")}
                        alt="naver_logo"
                    />
                </span>
            </div>
        </div>
    );
}
Login.displayName = "MyPage";
