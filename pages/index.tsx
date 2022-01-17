import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
    const [check, setCheck] = useState(false);
    const changeHandler = (check: boolean, setCheck: any) => {
        setCheck(!check);
    };
    return (
        <div className="flex items-center flex-col mx-auto my-40 w-main_width font-bold font-HANDotum">
            <h1 className="text-6xl mb-8  text-yellow">DUNGJI</h1>
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
            <div className="w-full flex items-center h-16 mb-4">
                <input
                    type="checkbox"
                    color="default"
                    id="id-save"
                    checked={check}
                    onChange={() => changeHandler(check, setCheck)}
                />
                <label htmlFor="id-save" className="text-blur text-xl ">
                    아이디 저장
                </label>
                <div className="ml-auto">
                    <Link href="/policy">
                        <span className="border-r  border-black pr-2 mr-2">
                            회원가입
                        </span>
                    </Link>
                    <Link href="/password_reset">비밀번호 재설정</Link>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4 border-t border-blur pt-8">
                <div className="mb-8 text-2xl">간편 로그인하기</div>
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
};

export default Login;
