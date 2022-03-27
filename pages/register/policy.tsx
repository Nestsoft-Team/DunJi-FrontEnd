import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Policy({}) {
    const [checkAll, setCheckAll] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);

    const checkAllHandler = () => {
        setCheckAll(!checkAll);
        setCheck1(!checkAll);
        setCheck2(!checkAll);
        setCheck3(!checkAll);
        setCheck4(!checkAll);
    };
    const checkBoxHandler = (
        check: boolean,
        setCheck: (active: boolean) => void
    ) => {
        setCheck(!check);
    };

    return (
        <div className="flex min-w-20  items-center flex-col my-40 mx-auto w-main_width font-sans">
            <h1 className="w-full text-3xl font-bold border-b border-yellow p-4">
                회원가입
            </h1>
            <h2 className="text-lg py-8 mr-auto font-bold">
                어서오세요! 둥지 서비스 이용약관에 동의해주세요.
            </h2>
            <form className="flex w-full flex-col ">
                <div className="border-b border-yellow mb-8 w-full flex">
                    <input type="checkbox" id="checkAll" className="hidden" />
                    <label
                        htmlFor="checkAll"
                        className={`inline-block before:content-[''] w-7 h-7 border border-blur mr-2  algin-middle font-NotoSansKR font-  rounded-md text-center ${
                            checkAll ? "before:content-['✔️'] text-white " : ""
                        }`}
                        onClick={checkAllHandler}
                    ></label>
                    <span className="ml-2  text-blur text-xl font-normal mb-4">
                        모두 동의
                    </span>
                </div>
                <div className="flex items-center w-full text-xl mb-10 ">
                    <input type="checkbox" id="check1" className="hidden" />
                    <label
                        htmlFor="check1"
                        className={`font-SegoeUI   inline-block before:content-[''] w-7 h-7 border border-blur mr-2  algin-middle font-NotoSansKR  rounded-md text-center ${
                            check1 ? "before:content-['✔️'] text-white " : ""
                        }`}
                        onClick={() => checkBoxHandler(check1, setCheck1)}
                    ></label>
                    <span className="  ml-2 text-xl font-normal">
                        [필수] 만 14세 이상입니다.
                    </span>
                </div>
                <div className="flex items-center w-full text-xl mb-10">
                    <input type="checkbox" id="check2" className="hidden" />
                    <label
                        htmlFor="check2"
                        className={`font-SegoeUI   inline-block before:content-[''] w-7 h-7 border border-blur mr-2  algin-middle font-NotoSansKR  rounded-md text-center ${
                            check2 ? "before:content-['✔️'] text-white " : ""
                        }`}
                        onClick={() => checkBoxHandler(check2, setCheck2)}
                    ></label>
                    <span className=" ml-2 text-xl font-normal">
                        [필수] 둥지 서비스 이용약관 동의
                    </span>
                    <FontAwesomeIcon
                        className="text-xl font-normal ml-auto"
                        icon="chevron-right"
                    />
                </div>
                <div className="flex items-center w-full text-xl mb-10">
                    <input type="checkbox" id="check3" className="hidden" />
                    <label
                        htmlFor="check3"
                        className={`font-SegoeUI   inline-block before:content-[''] w-7 h-7 border border-blur mr-2  algin-middle font-NotoSansKR  rounded-md text-center ${
                            check3 ? "before:content-['✔️'] text-white " : ""
                        }`}
                        onClick={() => checkBoxHandler(check3, setCheck3)}
                    ></label>
                    <span className=" ml-2 text-xl font-normal">
                        [필수] 개인정보 수집 및 이용 동의
                    </span>{" "}
                    <FontAwesomeIcon
                        className="text-xl font-normal ml-auto"
                        icon="chevron-right"
                    />
                </div>
                <div className="flex items-center w-full text-xl mb-10">
                    <input type="checkbox" id="check4" className="hidden" />
                    <label
                        htmlFor="check4"
                        className={`font-SegoeUI   inline-block before:content-[''] w-7 h-7 border border-blur mr-2  algin-middle font-NotoSansKR  rounded-md text-center ${
                            check4 ? "before:content-['✔️'] text-white " : ""
                        }`}
                        onClick={() => checkBoxHandler(check4, setCheck4)}
                    ></label>
                    <span className=" ml-2 text-xl font-normal">
                        [선택] 마케팅 정보 수신에 대한 동의
                    </span>
                    <FontAwesomeIcon
                        className="text-xl font-normal ml-auto"
                        icon="chevron-right"
                    />
                </div>

                <div className="w-full text-blur my-6">
                    <p>만 14세 이상 회원 가입이 가능합니다.</p>
                    <p>
                        해당 내용은
                        <span className="">이용약관 및 정책</span>
                        에서도 확인 가능합니다.
                    </p>
                </div>
                <Link href="/register/form">
                    <a className="w-full bg-yellow h-16 text-lg flex justify-center items-center">
                        동의하고 진행하기
                    </a>
                </Link>
            </form>
        </div>
    );
}
