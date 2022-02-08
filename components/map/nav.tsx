import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const [upDown, setUpDown] = useState<boolean>(false);
    const unDownHandler = () => {
        setUpDown(!upDown);
    };
    return (
        <div className="flex flex-col  fixed bottom-0 z-10 items-center ">
            <div
                className="h-18 bg-white flex justify-center px-10 pt-2 z-20 w-40 rounded-t-[3rem]"
                onClick={unDownHandler}
            >
                <div className={` ${upDown ? "scale-y-[-1]" : null}`}>
                    <Image
                        src={require("../../image/map/updown.jpg")}
                        alt="updown"
                        width={30}
                        height={30}
                    ></Image>
                </div>
            </div>
            <nav
                className="bg-white flex w-screen justify-between h-28
            items-center px-10 z-10 shadow-thick"
            >
                <div>
                    <Link href="/">
                        <a>
                            <Image
                                src={require("../../image/map/home.jpg")}
                                alt="home"
                                width={40}
                                height={40}
                            ></Image>
                        </a>
                    </Link>
                </div>
                <div>
                    <Image
                        className="text-yellow"
                        src={require("../../image/map/heart_yellow.jpg")}
                        alt="heart"
                        width={40}
                        height={40}
                    ></Image>
                </div>
                <div>
                    <Image
                        className="text-yellow"
                        src={require("../../image/map/plus.jpg")}
                        alt="plus"
                        width={40}
                        height={40}
                    ></Image>
                </div>
                <div>
                    <Image
                        className="text-yellow"
                        src={require("../../image/map/talk.jpg")}
                        alt="talk"
                        width={40}
                        height={40}
                    ></Image>
                </div>
                <div>
                    <Image
                        className="text-yellow"
                        src={require("../../image/map/list.jpg")}
                        alt="list"
                        width={40}
                        height={40}
                    ></Image>
                </div>
            </nav>
        </div>
    );
}
