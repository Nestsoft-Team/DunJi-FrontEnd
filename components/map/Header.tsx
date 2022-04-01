import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <header
            className="flex w-screen justify-between px-room_register_pd 
                py-4  h-24 items-center text-xl  border-b"
        >
            <div className="flex text-2xl items-center">
                <div>
                    <FontAwesomeIcon icon="chevron-left" />
                </div>
                <div className="ml-4">필터 설정</div>
            </div>
            <div className="text-main">초기화</div>
        </header>
    );
}
