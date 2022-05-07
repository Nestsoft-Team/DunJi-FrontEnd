import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
    return (
        <nav
            className="absolute bottom-0 bg-white flex w-screen justify-between h-nav_height
            items-center px-10 z-[20] shadow-thick"
        >
            <div>
                <Link href="/">
                    <a>
                        <Image
                            src={require("../../icon/map/home.jpg")}
                            alt="home"
                            width={30}
                            height={30}
                        ></Image>
                    </a>
                </Link>
            </div>
            <div>
                <Image
                    className="text-yellow"
                    src={require("../../icon/map/heart_yellow.jpg")}
                    alt="heart"
                    width={30}
                    height={30}
                ></Image>
            </div>
            <div>
                <Image
                    className="text-yellow"
                    src={require("../../icon/map/plus.jpg")}
                    alt="plus"
                    width={30}
                    height={30}
                ></Image>
            </div>
            <div>
                <Image
                    className="text-yellow"
                    src={require("../../icon/map/talk.jpg")}
                    alt="talk"
                    width={30}
                    height={30}
                ></Image>
            </div>
            <div>
                <Image
                    className="text-yellow"
                    src={require("../../icon/map/list.jpg")}
                    alt="list"
                    width={30}
                    height={30}
                ></Image>
            </div>
        </nav>
    );
}
export default memo(Nav);
