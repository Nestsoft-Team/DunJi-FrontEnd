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
             border-b border-1 h-[6rem]"
            onClick={unDownHandler}
        >
            <div className="w-16 h-2 bg-border_color rounded-[2rem] my-4" />
            <div className="text-[1.5rem] flex items-center">
                <Image
                    src={require("icon/방.svg")}
                    width={25}
                    height={25}
                    alt="room"
                />
                33개의 방
            </div>
        </div>
    );
}
