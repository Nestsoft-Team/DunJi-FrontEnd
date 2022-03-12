import { useRef, useState } from "react";

type propsType = {
    upDown: boolean;
    setUpDown: Function;
};
export default function RoomType({ upDown, setUpDown }: propsType) {
    const [roomFocus, setRoomFoucus] = useState<number>(0);
    const updownNav = useRef(false);
    function roomFocusHandler(num: number) {
        setRoomFoucus(num);
    }
    const unDownHandler = () => {
        setUpDown(!upDown);
    };
    const roomType = ["전체 방", "중개사무소", "개인"];

    return (
        <div
            className={`w-full flex flex-col items-center  bg-white
        ${upDown && "hidden"}
    
    `}
        >
            <div
                className={`w-16 h-2 bg-border_color rounded-[2rem] mt-4
         
            `}
                onClick={unDownHandler}
            />
            <nav className="grid grid-cols-3 gap-2 w-full items-center text-xl mb-2 px-12 text-border_color">
                {roomType.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => roomFocusHandler(index)}
                        className={`${
                            roomFocus === index ? "bg-orange text-white" : null
                        } border rounded-2xl h-16 my-2 w-full flex items-center justify-center`}
                    >
                        {item}
                    </div>
                ))}
            </nav>
        </div>
    );
}
