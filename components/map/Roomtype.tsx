import Image from "next/image";

type propsType = {
    upDown: null | boolean;
    setUpDown: Function;
};
export default function RoomType({ upDown, setUpDown }: propsType) {
    const unDownHandler = () => {
        setUpDown(!Boolean(upDown));
    };

    return (
        <div
            className="w-full flex flex-col items-center  bg-white
             border-b border-1 "
            onClick={unDownHandler}
        >
            <div
                className={`w-16 h-2 bg-border_color rounded-[2rem] my-4
            `}
            />
            <div className="text-[1.5rem] flex items-center">
                <Image
                    src={require("icon/방.svg")}
                    width={25}
                    height={25}
                    alt="room"
                />
                33개의 방
            </div>
            <nav className="grid grid-cols-3 gap-2 w-full items-center text-xl pb-2 px-12 text-border_color"></nav>
        </div>
    );
}
