export default function Policy({}) {
    return (
        <section className="w-main_width min-w-20 flex items-center flex-col my-40 mx-auto font-sans">
            <h1 className="w-full border-b border-yellow pb-4 text-3xl font-bold">
                회원정보 입력
            </h1>
            <h2 className="text-lg py-8 mr-auto font-bold">
                둥지 서비스 이용을 위해 아래 정보를 입력해 주세요.
            </h2>
            <form className="flex flex-col w-full">
                <label className="text-lg mb-2 mt-4 font-bold">아이디</label>
                <input
                    className="outline-0 border-blur border h-12 pl-4 focus:border-yellow"
                    placeholder="이메일 주소 입력"
                    type="email"
                ></input>
                <label className="text-lg mb-2 mt-4 font-bold">
                    이용자 이름
                </label>
                <input
                    className="outline-0 border-blur border h-12 pl-4 focus:border-yellow"
                    placeholder="한글 또는 영문"
                ></input>
                <label className="text-lg mb-2 mt-4 font-bold">비밀번호</label>
                <input
                    className="outline-0 border-blur border h-12 pl-4 mb-4 focus:border-yellow"
                    type="password"
                    placeholder="8자리 이상 영문, 숫자, 특수문자 포함"
                ></input>
                <input
                    className="outline-0 border-blur border h-12 pl-4 focus:border-yellow mb-4"
                    type="password"
                    placeholder="비밀번호 확인"
                ></input>
                <button
                    type="submit"
                    className="bg-yellow h-16 font-sans text-2xl"
                >
                    확인
                </button>
            </form>
        </section>
    );
}
