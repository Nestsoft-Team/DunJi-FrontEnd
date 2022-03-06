export default function password_reset({}) {
    return (
        <section className=" flex items-center flex-col my-40 mx-auto w-main_width font-sans">
            <h1 className="w-full border-b border-yellow pb-4 text-3xl font-bold">
                비밀번호 재설정
            </h1>
            <form className="flex flex-col w-full">
                <label className="text-lg mb-2 mt-20 font-bold">아이디</label>
                <input
                    className="outline-0 border-blur border h-12 pl-4 focus:border-yellow mb-20"
                    placeholder="이메일 주소 입력"
                    type="email"
                ></input>

                <button className="bg-yellow h-16 font-sans text-2xl">
                    확인
                </button>
            </form>
        </section>
    );
}
